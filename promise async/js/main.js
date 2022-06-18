const URL_PEOPLE = "https://swapi.dev/api/people";
const URL_PLANET = "https://swapi.dev/api/planets";
const URL_STARSHIPS = "https://swapi.dev/api/starships";

window.addEventListener("load", Init);

function Init(){

  Request(URL_PEOPLE, PrintPeson);
  const people = document.querySelector(".people");
  const planets = document.querySelector(".planets");
  const starships = document.querySelector(".starships");

  people.addEventListener('click', () => {
    Request(URL_PEOPLE, PrintPeson);
  })

  planets.addEventListener('click', () => {
    Request(URL_PLANET, PrintPlanets);
  })

  starships.addEventListener('click', () => {
    Request(URL_STARSHIPS, PrintStarships);
  })

}

function Request(URL, Callback){
  fetch(URL)
  .then(result => {
    return result.json();
  }).then(data => {
    Callback(data);
  })
  .catch(err => console.log(err))
}

PrintPeson = ({results}) => {
    const body = document.querySelector(".data-block");
  body.querySelectorAll("*").forEach((n) => n.remove());
    results.forEach((element)=>{

        const data2 = document.querySelector(".data-block");
        const info = document.createElement("div");

        info.setAttribute('class', 'element_info');

        const element_name = document.createElement('h1');
        element_name.innerHTML = element.name;

        const element_height = document.createElement("h3");
        element_height.innerHTML = "Height: " + element.height;

    const element_mass = document.createElement("h3");
    element_mass.innerHTML = "Mass: " + element.mass;

    const element_Gender = document.createElement("h3");
    element_Gender.innerHTML = "Gender: " + element.gender;

        info.appendChild(element_name);
        info.appendChild(element_height);
        info.appendChild(element_mass);
        info.appendChild(element_Gender);
        data2.appendChild(info);

    })

    
  //console.log(persons)
};


PrintPlanets = ({results}) => {
    const body = document.querySelector(".data-block");
  body.querySelectorAll("*").forEach((n) => n.remove());
    results.forEach((element)=>{

        const data2 = document.querySelector(".data-block");
        const info = document.createElement("div");

        info.setAttribute('class', 'element_info');

        const element_name = document.createElement('h1');
        element_name.innerHTML = element.name;

        const element_diameter = document.createElement("h3");
        element_diameter.innerHTML = "Diameter: " + element.diameter;

    const element_climate = document.createElement("h3");
    element_climate.innerHTML = "Climate: " + element.climate;


        info.appendChild(element_name);
        info.appendChild(element_diameter);
        info.appendChild(element_climate);
        data2.appendChild(info);

    })

    
  //console.log(persons)
};

  PrintStarships = ({ results }) => {
    const body = document.querySelector(".data-block");
  body.querySelectorAll("*").forEach((n) => n.remove());
    results.forEach((element) => {
      const data2 = document.querySelector(".data-block");
      const info = document.createElement("div");
      info.setAttribute("class", "element_info");
  
      const element_name = document.createElement("h1");
      element_name.innerHTML = element.name;
  
      const element_model = document.createElement("h3");
      element_model.innerHTML = "Model: " + element.model;
  
      const element_manufacturer = document.createElement("h3");
      element_manufacturer.innerHTML = "Manufacturer: " + element.manufacturer;
  
      const element_length = document.createElement("h3");
      element_length.innerHTML = "Length: " + element.length;
  
      info.appendChild(element_name);
      info.appendChild(element_model);
      info.appendChild(element_manufacturer);
      info.appendChild(element_length);
      data2.appendChild(info);
    });
  };
