const URL_SWAPI = 'https://thronesapi.com/api/v2/Characters';

window.addEventListener("load", Init);
let characters = [];
let flag = false;

function Init(){

  GetRequest(URL_SWAPI, PrintCharacters);
  let isDescSortId = false;
  let isDescName = false;
  const id = document.querySelector(".id");
  const searchInput = document.getElementById('searchInput');
  const name = document.querySelector(".name");
  const image = document.querySelector(".image");
  const searchButton = document.getElementById('searchBtn');
  searchButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    searchByName(searchInput.value);
  });
  searchInput.addEventListener('change', (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
    if(!ev.target.value || ev.target.value == ''){
      console.log('fdfsfsdf');
      GetRequest(URL_SWAPI, PrintCharacters);
    }
  });
  id.addEventListener('click', (e) => {
    e.preventDefault();
    //flag=true;
    isDescSortId = !isDescSortId;
    if(isDescSortId){
      characters.sort(function(a, b){
        if(a.id > b.id) return -1;
        if(a.id < b.id) return 1;
        return 0;
      });
    }
    else{
      characters.sort(function(a, b){
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
      });
    }
    PrintCharacters(characters);
    //GetRequest(URL_SWAPI,() => PrintCharacters(characters));
  })

  name.addEventListener('click', (e) => {
    e.preventDefault();
    isDescName = !isDescName;
if(isDescName){
  characters.sort(function compare_lname( a, b )
  {
  if ( a.firstName.toLowerCase() < b.firstName.toLowerCase()){
    return -1;
  }
  if ( a.firstName.toLowerCase() > b.firstName.toLowerCase()){
    return 1;
  }
  return 0;
});
}
else{
  characters.sort(function compare_lname( a, b )
  {
  if ( a.firstName.toLowerCase() > b.firstName.toLowerCase()){
    return -1;
  }
  if ( a.firstName.toLowerCase() < b.firstName.toLowerCase()){
    return 1;
  }
  return 0;
});
}
   
PrintCharacters(characters);
  })

  // image.addEventListener('click', () => {
  //  //
  // })
  
  }

  function isLocalStorageEmpty(){
    if(localStorage.length>0){
      return false;
    }
    else{
      return true;
    }
  }

  function GetRequest(URL,Callback){
    fetch(URL)
    .then(result=>{return result.json();})
    .then(data=>{
        if(!flag){
          if(isLocalStorageEmpty){
            localStorage.setItem(data,'characters');
          }
          else{
            let item = localStorage.getElementById('characters');
            console.log(item);
          }
            characters = [...data];
        }
        Callback(characters);
    })
    .catch(err=>console.log(err)); 
  }


  //Method display selected element
  const displaySelected = (selected) => {
    //alert(selected.id);
    const titleFullName = document.getElementById('characterName');
    titleFullName.innerText = selected.fullName;

   const id = document.getElementById('characterId');
   id.innerText = 'Id: '+selected.id;
    
    const firstName = document.getElementById('firstName');
    firstName.innerText = 'First Name: ' + selected.firstName;
    const lastName = document.getElementById('lastName');
    lastName.innerText = 'Last Name: ' + selected.lastName;
    const fullName = document.getElementById('fullName');
    fullName.innerText = 'Full Name: ' + selected.fullName;
    const characterDescImg = document.getElementById('characterDescImg');
    characterDescImg.src = selected.imageUrl;
    const title = document.getElementById("title");
    title.innerText  = 'Title: '+selected.title;
    const family = document.getElementById("family");
    family.innerText = 'Family: '+selected.family;

    //DescBySeletion(selected);
  }



const searchByName = (name) => {
  //if(characters.length < 0) return;
  characters = characters.filter((el) => el.firstName.includes(name) || el.fullName.includes(name) || el.lastName.includes(name));
  if(characters.length > 0){
    PrintCharacters(characters);
  }
  else{
    RemoveElements();
  }
}

 const PrintCharacters = (arr) => {

    RemoveElements();

    DescBySeletion(arr[0]);

    const data = document.querySelector(".characters-list");
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "bodyWrapper");
    data.appendChild(wrapper);



    arr.forEach((item) => {
        //console.log(item);
        const character = document.createElement("div");
        // event
        character.addEventListener('click', (ev) => {
            ev.preventDefault();
            displaySelected(item);
        });
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
    
    RemoveElements2();
    const data = document.querySelector(".character-desc");
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "bodyWrapper2");
    data.appendChild(wrapper);

    const elementMainDesc = document.createElement("div");
    elementMainDesc.setAttribute("class", "elementMainDesc");

    const elementDetailDesc = document.createElement("div");
    elementDetailDesc.setAttribute("class", "elementDetailDesc");


    const characterName = document.createElement("p");
    characterName.innerText = element.fullName;
    characterName.setAttribute('id', 'characterName');
    // alert(element.fullName);
    const characterImg = document.createElement("img");
    characterImg.setAttribute("id","characterDescImg");
    characterImg.setAttribute("class","character-desc-img");
    characterImg.setAttribute("src",element.imageUrl);
    characterImg.setAttribute("alt","character");

    const characterId = document.createElement("p");
    characterId.setAttribute('id','characterId');
    characterId.innerText = `id: ${element.id}`;

    const characterFirstName = document.createElement("p");
    characterFirstName.setAttribute('id', 'firstName');
    characterFirstName.innerText = `First Name: ${element.firstName}`;
    
    const characterLastName = document.createElement("p");
    characterLastName.setAttribute('id', 'lastName');
    characterLastName.innerText = `Last Name: ${element.lastName}`;
    
    const characterFullName = document.createElement("p");
    characterFullName.setAttribute('id', 'fullName');
    characterFullName.innerText = `Full Name: ${element.fullName}`;

    const characterTitle = document.createElement("p");
    characterTitle.setAttribute('id', 'title');
    characterTitle.innerText = `Title: ${element.title}`;

    const characterFamily = document.createElement("p");
    characterFamily.setAttribute('id', 'family');
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
    //if(characters.length == 0) return;
    let element = document.querySelector(".bodyWrapper");
    if(element)
    element.remove();
  }
  function RemoveElements2() {
    let element = document.querySelector(".bodyWrapper2");
    if(element)
    element.remove();
  }

  




