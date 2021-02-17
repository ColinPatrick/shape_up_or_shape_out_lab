// initial declaration of all elements being accessed by the DOM
const shapeForm = document.getElementById('shape-form');
const recBtn = document.getElementById('rec-btn');
const squareBtn = document.getElementById('square-btn');
const circleBtn = document.getElementById('circle-btn');
const triangleBtn = document.getElementById('tri-btn');
const recHeight = document.getElementById('rectangle-height');
const recWidth = document.getElementById('rectangle-width');
const squareSides = document.getElementById('square-sides');
const circleRadius = document.getElementById('circle-radius');
const triangleHeight = document.getElementById("triangle-height");
let shapeBoard = document.getElementById('shapeBoard');
let shapeName = document.getElementById('shapeName');
let shapeHeight = document.getElementById('shapeHeight');
let shapeWidth = document.getElementById('shapeWidth');
let shapeArea = document.getElementById('shapeArea');
let shapeRadius = document.getElementById('shapeRadius');
let shapePerimeter = document.getElementById('shapePerimeter');
// an event listener that keeps the page from refreshing when a form is submitted
shapeForm.addEventListener('submit', (event) => {
    event.preventDefault();
});
// buttons start off being disabled
recBtn.disabled = true;
squareBtn.disabled = true;
circleBtn.disabled = true;
triangleBtn.disabled = true;
// parent class of "Shape"
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // a method that adds the shape's dimensions to the assigned html area
    describe(height, width) {
        shapeHeight.innerHTML = `Height: ${height} pixels`;
        shapeWidth.innerHTML = `Width: ${width} pixels`;               
    }
    // a method that will create the shape and add it to a random location within the assigned html area
    draw() {
        let x = Math.floor(Math.random() * (600 - this.width));
        let y = Math.floor(Math.random() * (600 - this.height));
        this.div = document.createElement("div");
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;       
        shapeBoard.appendChild(this.div);
    }
    // a method that will remove the shape and all of it's dimension info
    removeShape() {
        shapeName.innerHTML = "Shape: ";
        shapeHeight.innerHTML = "Height: ";
        shapeWidth.innerHTML = "Width: ";
        shapeRadius.innerHTML = "Radius: "
        shapePerimeter.innerHTML = "Perimeter: ";
        shapeArea.innerHTML = "Area: ";
        shapeBoard.removeChild(this.div);
    };
};
// a child class "Rectangle" extended from the parent Class "Shape"
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
        this.cssClass = 'rectangle';
        this.perimeter = height * 2 + width * 2;
        this.area = height * width;
        this.draw();
        // an event listener that will call the 'describe' method when a shape is clicked
        this.div.addEventListener('click', () => {
            this.describe(height, width);
        })
        // an event listener that will call the 'removeShape' method when a shape is double clicked
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        });
    }
    // 'describe' method is passed from the parent with added steps
    describe(height, width) {
        super.describe(height, width);
        shapeName.innerHTML = `Shape: ${this.name}`;
        shapeRadius.innerHTML = "Radius: N/A";
        shapePerimeter.innerHTML = `Perimeter: ${this.perimeter}`;
        shapeArea.innerHTML = `Area: ${this.area}`;
    }
    // 'draw' method is passed from the parent with added step of calling the describe method
    draw() {
        super.draw();
        this.describe(this.height, this.width);
    };
};
// child class "Square" extended from the parent class "Shape" 
class Square extends Shape {
    constructor(sides) {
        super();
        this.sides = sides;
        this.height = sides;
        this.width = sides;
        this.perimeter = sides * 4;
        this.area = sides ** 2;
        this.name = "Square";
        this.cssClass = "square";
        this.draw();
        // the same single event listener for if the shape is clicked
        this.div.addEventListener('click', () => {
            this.describe(this.height, this.width);
        });
        // the same single event listener for if the shape is double clicked
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        });
    };
    // the 'describe' method is passed from the parent with added steps
    describe(height, width) {
        super.describe(height, width);
        shapeName.innerHTML = `Shape: ${this.name}`;
        shapeRadius.innerHTML = "Radius: N/A";
        shapePerimeter.innerHTML = `Perimeter: ${this.perimeter}`;
        shapeArea.innerHTML = `Area: ${this.area}`;
    };
    // the 'draw' method is passed from the parent with added steps
    draw() {
        super.draw();
        this.describe(this.height, this.width);
    };
};
// the child class "Circle" extended from the parent class "Shape"
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.height = radius * 2;
        this.width = radius * 2;
        this.perimeter = radius * 2 * Math.PI;
        this.area = radius ** 2 * Math.PI;
        this.name = "Circle"
        this.cssClass = "circle";
        this.draw();
        // the same single event listener for if the shape is clicked
        this.div.addEventListener('click', () => {
            this.describe(this.height, this.width);
        });
        // the same single event listener for if the shape is double clicked
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        });
    };
    // the 'describe' method is passed from the parent with added steps
    describe(height, width) {
        super.describe(height, width);
        shapeName.innerHTML = `Shape: ${this.name}`;
        shapeRadius.innerHTML = `Radius: ${this.radius}`;
        shapePerimeter.innerHTML = `Perimeter: ${this.perimeter}`;
        shapeArea.innerHTML = `Area: ${this.area}`;
    };
    // the 'draw' method is passed from the parent with added steps
    draw() {
        super.draw();
        this.div
        this.describe(this.height, this.width);
    };
};
// the child class "Triangle" is extended from the parent class "Shape"
class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.height = height;
        this.width = height;
        this.perimeter = 2 * height + Math.sqrt(2) * height;
        this.area = 0.5 * height * height;
        this.name = "Triangle";
        this.cssClass = "triangle";
        this.draw();
        // the same single event listener for if the shape is clicked
        this.div.addEventListener('click', () => {
            this.describe();
        });
        // the same single event listener for if the shape is double clicked
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        });
    };
    // the 'describe' method is passed from the parent with added steps
    describe() {
        shapeName.innerHTML = `Shape: ${this.name}`;
        shapeHeight.innerHTML = `Height: ${this.height}`;
        shapeWidth.innerHTML = `Width: ${this.width}`;
        shapeRadius.innerHTML = "Radius: N/A"
        shapePerimeter.innerHTML = `Perimeter: ${this.perimeter}`;
        shapeArea.innerHTML = `Area: ${this.area}`;
    };
    // the 'draw' method is passed from the parent with added steps
    draw() {
        super.draw();
        this.div.style.borderBottomWidth = `${this.height}px`;
        this.div.style.borderRightWidth = `${this.height}px`;
        this.describe();     
    }
};
// event listeners that will create a child class of shape depending on which shape's button is clicked
recBtn.addEventListener('click', () => {
    new Rectangle(recHeight.value, recWidth.value);   
});
squareBtn.addEventListener('click', () => {
    new Square(squareSides.value);
});
circleBtn.addEventListener('click', () => {
    new Circle(circleRadius.value);
});
triangleBtn.addEventListener('click', () => {
    new Triangle(triangleHeight.value);
});
// event listeners that check to make sure the form values are appropriate before allowing the shape buttons to be clicked
recHeight.addEventListener("keyup", () =>{
    if (recHeight.value >=1 && recHeight.value < 600) {
        recBtn.disabled = false;      
    } else {
        recBtn.disabled = true;
    }
});
recWidth.addEventListener("keyup", () =>{
    if (recWidth.value >= 1 && recWidth.value < 600) {
        recBtn.disabled = false;      
    } else {
        recBtn.disabled = true;
    }
});
squareSides.addEventListener("keyup", () =>{
    if (squareSides.value >= 1 && squareSides.value < 600) {
        squareBtn.disabled = false;      
    } else {
        squareBtn.disabled = true;
    }
});
circleRadius.addEventListener("keyup", () =>{
    if (circleRadius.value >= 1 && circleRadius.value < 600) {
        circleBtn.disabled = false;      
    } else {
        circleBtn.disabled = true;
    }
});
triangleHeight.addEventListener("keyup", () =>{
    if (triangleHeight.value >= 1 && triangleHeight.value < 600) {
        triangleBtn.disabled = false;      
    } else {
        triangleBtn.disabled = true;
    }
});