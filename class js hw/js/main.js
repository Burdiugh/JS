class Person{

constructor(name,surname){
this.name = name;
this.surname = surname;
    }

    ShowPerson(){
        console.log(`Name: ${this.name} Surname: ${this.surname}`);
    }

}

class Apartment{

constructor(capasity=3){
    this.people = new Array();
    this.capasity = capasity;
}

Add_person(person){
    if(this.people.length>=this.capasity){
        console.log('Can not be added more people.');
    }
    else{
        this.people.push(person)
    }
}

ShowResidents(){
    this.people.forEach(element => {
        element.ShowPerson();
    });
}

ShowFullInfo(){
    console.log(`\nCapasity: ${this.capasity}`);
    console.log('Residents:\n');
    this.people.forEach(element => {
        element.ShowPerson();
    });
    console.log('\n');

}

}

class House{
constructor(capacity=3){
this.capacity=capacity;
this.apartments = new Array();
}

showApartments(){
this.apartments.forEach(element=>{element.ShowFullInfo()})
}

rentApartment(apartment){
    if(this.apartments.length>=this.capasity){
        console.log('Can not be rented more apartments.');
    }
    else{
        this.apartments.push(apartment)
    }
}

}

let person = new Person('vitaliy','Nalivkin');
let person2 = new Person('Misha','Ogorodnik');
let person3 = new Person('Nina','Arcodieva');
let person4 = new Person('China','Boo');


let apartment = new Apartment(2);
apartment.Add_person(person);
apartment.Add_person(person2);
apartment.ShowResidents();

let apartment2 = new Apartment(2);
apartment2.Add_person(person3);
apartment2.Add_person(person4);
apartment2.ShowResidents();

let house = new House(2);
house.rentApartment(apartment);
house.rentApartment(apartment2);
house.showApartments();




//apartment.Add_person(person3);



