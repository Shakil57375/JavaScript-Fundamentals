// Problem: We want to create a base class for geometric shapes (Shape) and specific subclasses for Circle and Rectangle.
// Each shape should have a color, and we want to calculate the area for each shape.

// Solution: Use the superclass Shape with a constructor that initializes the color, and then extend it in the Circle and Rectangle subclasses.

// Superclass
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Method to be overridden by subclasses
    getArea() {
        return 'Area calculation not implemented for this shape.';
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(color, radius) {
        // Call the constructor of the superclass (Shape)
        super(color);

        // Initialize subclass-specific property
        this.radius = radius;
    }

    // Override the getArea method for Circle
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(color, width, height) {
        // Call the constructor of the superclass (Shape)
        super(color);

        // Initialize subclass-specific properties
        this.width = width;
        this.height = height;
    }

    // Override the getArea method for Rectangle
    getArea() {
        return this.width * this.height;
    }
}

// Example usage
const redCircle = new Circle('red', 5);
console.log(`Area of the red circle: ${redCircle.getArea()}`);

const blueRectangle = new Rectangle('blue', 4, 6);
console.log(`Area of the blue rectangle: ${blueRectangle.getArea()}`);
