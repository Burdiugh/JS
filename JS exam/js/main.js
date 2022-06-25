const URL_SWAPI = 'https://thronesapi.com/api/v2/Characters';

window.addEventListener("load", Init);
let characters = [];
let flag = false;

function Init(){

  Request(URL_SWAPI, PrintCharacters);
    
  const id = document.querySelector(".id");
  const name = document.querySelector(".name");
  const image = document.querySelector(".image");

  id.addEventListener('click', () => {
    flag=true;
    characters.sort(function(a, b){return b - a});
    Request(URL_SWAPI,PrintCharacters);
  })

  name.addEventListener('click', () => {
    flag=true;
   characters.sort();
Request(URL_SWAPI,PrintCharacters);
  })

  image.addEventListener('click', () => {
   //
  })
  
  }

  function Request(URL,Callback){
    fetch(URL)
    .then(result=>{return result.json();})
    .then(data=>{
        if(!flag){
            characters = [...data];
        }
        Callback(characters);
    })
    .catch(err=>console.log(err)); 
  }

  PrintCharacters = (arr) =>{

    RemoveElements();

    DescBySeletion(arr[0]);

    const data = document.querySelector(".characters-list");
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "bodyWrapper");
    data.appendChild(wrapper);



    arr.forEach((item) => {
        console.log(item);

        const character = document.createElement("div");
        character.setAttribute("class", "bodyElement");

        const characterId = document.createElement("p");
        characterId.innerText = item.id;

        const characterName = document.createElement("p");
        characterName.innerText = item.fullName;

        const characterImg = document.createElement("img");
        characterImg.setAttribute("class","characterImg");
        characterImg.setAttribute("src",item.imageUrl);
        characterImg.setAttribute("alt","character");
        

        character.appendChild(characterId);
        character.appendChild(characterName);
        character.appendChild(characterImg);
        wrapper.appendChild(character);
    });

    
  }

  function DescBySeletion(element){
    
    RemoveElements();
    const data = document.querySelector(".character-desc");
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "bodyWrapper");
    data.appendChild(wrapper);

    const elementMainDesc = document.createElement("div");
    elementMainDesc.setAttribute("class", "elementMainDesc");

    const elementDetailDesc = document.createElement("div");
    elementDetailDesc.setAttribute("class", "elementDetailDesc");


    const characterName = document.createElement("p");
    characterName.innerText = element.fullName;

    const characterImg = document.createElement("img");
    characterImg.setAttribute("class","character-desc-img");
    characterImg.setAttribute("src",element.imageUrl);
    characterImg.setAttribute("alt","character");

    const characterId = document.createElement("p");
    characterId.innerText = `id: ${element.id}`;

    const characterFirstName = document.createElement("p");
    characterFirstName.innerText = `First Name: ${element.firstName}`;

    const characterLastName = document.createElement("p");
    characterLastName.innerText = `Last Name: ${element.lastName}`;

    const characterFullName = document.createElement("p");
    characterFullName.innerText = `Full Name: ${element.fullName}`;

    const characterTitle = document.createElement("p");
    characterTitle.innerText = `Title: ${element.title}`;

    const characterFamily = document.createElement("p");
    characterFamily.innerText = `Family: ${element.family}`;

    



     
    elementMainDesc.appendChild(characterName);
    elementMainDesc.appendChild(characterImg);
    elementDetailDesc.appendChild(characterId);
    elementDetailDesc.appendChild(characterFirstName);
    elementDetailDesc.appendChild(characterLastName);
    elementDetailDesc.appendChild(characterFullName);
    elementDetailDesc.appendChild(characterTitle);
    elementDetailDesc.appendChild(characterFamily);
    wrapper.appendChild(elementMainDesc);
    wrapper.appendChild(elementDetailDesc);

  }

  function RemoveElements() {
    let element = document.querySelector(".bodyWrapper");
    element.remove();
  }

  




