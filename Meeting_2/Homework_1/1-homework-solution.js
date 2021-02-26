function Car(make, model, year) {
    (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.owners = []),
    (this.getCarInfo = () =>
      `${this.make}  ${this.model} released in ${this.year} `),
    (this.addOwner = (owner) => {
      if (this.owners.includes(owner) == false) {
        this.owners.push(owner);
      }
    }),
    (this.removeOwner = (owner) =>
      (this.owners = this.owners.filter((own) => own!= owner))),
    (this.getOwnersCount = () => this.owners.length),
    (this.getOwnerNames = () => this.owners.map((own) => own.fullName())),
    (this.getFullInfo = () => `${this.make} ${this.model} from ${this.year}  ${this.getOwnersCount()}  person owns this car. these are - ${this.getOwnerNames()}.`);
}

function Person(name, surname, age, gender, cars = []) {
    (this.name = name),
    (this.surname = surname),
    (this.age = age),
    (this.gender = gender),
    (this.cars = cars),
    (this.fullName = () => `${this.name}  ${this.surname}`),
    (this.countCars = () => this.cars.length),
    (this.buysCar = (car) => {
      car.owners.push(this);
      if (this.cars.includes(car) == false) {
        this.cars.push(car);
      }
    }),
    (this.sellsCar = (car) => {
      this.cars = this.cars.filter((cars) => cars != car);
      car.owners = car.owners.filter((owner) => owner.name != this.name);
    }),
    (this.getAllCarsInfo = () =>
      `${this.name} owns these cars: ${this.cars.map((car) => car.getCarInfo())}.`);
}

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
