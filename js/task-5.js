class Car {
  static getSpecs(car) {
    console.log(`max speed: ${car.maxSpeed},
    speed: ${car.speed},
    is on: ${car.isOn},
    distance: ${car.distance},
    price: ${car.price}`);
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value + this.speed <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (value - this.speed <= 0) {
      this.speed -= value;
    } else this.speed = 0;
  }

  drive(hours) {
    if (this.isOn) {
      let trip = hours * this.speed;
      this.distance += trip;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

Car.getSpecs(mustang);
