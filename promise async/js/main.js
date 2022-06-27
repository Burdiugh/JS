const URL_PEOPLE = "https://swapi.dev/api/people";
const URL_PLANET = "https://swapi.dev/api/planets";
const URL_STARSHIPS = "https://swapi.dev/api/starships";

let currentObject;
let currentSelect = "people";

window.addEventListener("load", Init);


function Init(){

  Request(URL_PEOPLE, PrintPerson);
  const people = document.querySelector(".people");
  const planets = document.querySelector(".planets");
  const starships = document.querySelector(".starships");

  people.addEventListener('click', () => {
    currentSelect = "people";
    Request(URL_PEOPLE, PrintPerson);
  })

  planets.addEventListener('click', () => {
    currentSelect = "planets";
    Request(URL_PLANET, PrintPlanets);
  })

  starships.addEventListener('click', () => {
    currentSelect = "starships";
    Request(URL_STARSHIPS, PrintStarships);
  })

}

const nextBtn = document.querySelector(".nextBtn");

  nextBtn.addEventListener("click", () => {
    Next(currentObject.next, GetCurrentPrintCallback());
  });

  const previousBtn = document.querySelector(".previousBtn");
  previousBtn.addEventListener("click", () => {
    Next(currentObject.previous, GetCurrentPrintCallback());
  });


function GetCurrentPrintCallback() {
  switch (currentSelect) {
    case "people":
      return PrintPerson;
    case "planets":
      return PrintPlanets;
    case "starships":
      return PrintStarships;
  }
}

function Next(URL, Callback) {
  Request(URL, Callback);
}

function Request(URL, Callback){
  fetch(URL)
  .then(result => {
    return result.json();
  }).then(data => {
    console.log(data);
    const nextBtn = document.querySelector(".nextBtn");
    if (data.next == null) {
      
      nextBtn.setAttribute("disabled","disabled");
    } else {
      
      nextBtn.removeAttribute("disabled","disabled");
    }
    const previousBtn = document.querySelector(".previousBtn");
    if (data.previous == null) {
      previousBtn.setAttribute("disabled", "disabled");
    } else {
      previousBtn.removeAttribute("disabled","disabled");
    }
    currentObject = data;

    Callback(data);
  }) 
  .catch(err => console.log(err))
}

PrintPerson = ({results}) => {
Processing(results);
};

PrintPlanets = ({results}) => {
  Processing(results);
};

PrintStarships = ({results}) => {
     Processing(results);
};

function Processing(arr){
  RemoveElements();


  const data = document.querySelector(".data-block");
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "bodyWrapper");
  data.appendChild(wrapper);

  arr.forEach((item) => {
    console.log(item.name);

    const pName = document.createElement("p");
    pName.textContent = item.name;
    pName.setAttribute("class", "bodyElement");
    wrapper.appendChild(pName);
  });
}

  function RemoveElements() {
    let element = document.querySelector(".bodyWrapper");
    element.remove();
  }
