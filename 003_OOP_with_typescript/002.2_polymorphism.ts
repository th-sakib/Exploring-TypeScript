/*
 * * Polymorphism
 * * Poly means many, morphism means tranforming into one form to another.
 *
 * * Same function call produce different results based on the derived object.
 * */
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const shape = new Shape();
const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);

console.log(shape.getArea());
console.log(circle.getArea());
console.log(rectangle.getArea());
// As we can see same function returning different results. That's polymorphism
