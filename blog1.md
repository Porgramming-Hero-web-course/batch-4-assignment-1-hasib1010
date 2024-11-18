So, What Are Type Guards Anyway?
Okay, picture this: you have a function that takes either a number or a string. You need to do different stuff depending on the type. But how do you know what type you’re dealing with? TypeScript doesn’t magically know at runtime—it needs some help. That’s where type guards come in!

A type guard is like a checkpoint in your code that says, "Hey, let me figure out what type this thing is before I mess with it." Once TypeScript knows the type, it’ll let you safely use the right methods or properties.

My First "Ah-Ha!" Moment: Using typeof
I started with the simplest type guard: typeof. It’s like the training wheels for checking types.

Here’s a quick example I made to practice:

typescript
Copy code
function printLength(value: string | number) {
    if (typeof value === "string") {
        console.log("String length:", value.length); // Strings have length
    } else {
        console.log("Number doubled:", value * 2); // Numbers can be multiplied
    }
}

printLength("hello"); // Output: String length: 5
printLength(42); // Output: Number doubled: 84
Pretty simple, right? I just checked if the value was a string or number, and then TypeScript let me do stuff with it. Before this, I’d get all kinds of errors because I was trying to do .length on numbers. 😅

Leveling Up With instanceof
Once I got comfortable with typeof, I stumbled on instanceof. It’s like typeof, but for objects and classes.

Here’s how I practiced it:

typescript
Copy code
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // Safe: TypeScript knows it’s a Dog
    } else {
        animal.meow(); // Safe: TypeScript knows it’s a Cat
    }
}

const doggo = new Dog();
const kitty = new Cat();

makeSound(doggo); // Output: Woof!
makeSound(kitty); // Output: Meow!
This blew my mind! 🤯 I could check what kind of object I was dealing with and then use its methods safely. Before, I’d just guess and pray my code didn’t crash.

Custom Type Guards? Wait, I Can Make My Own?
While googling for more examples, I found out you can make custom type guards! This is for when you have fancy objects that typeof and instanceof can’t handle.

Here’s the code I wrote to test it out:

typescript
Copy code
interface Car {
    drive: () => void;
}

interface Boat {
    sail: () => void;
}

function isCar(vehicle: Car | Boat): vehicle is Car {
    return (vehicle as Car).drive !== undefined;
}

function operate(vehicle: Car | Boat) {
    if (isCar(vehicle)) {
        vehicle.drive(); // TypeScript knows it’s a Car
    } else {
        vehicle.sail(); // TypeScript knows it’s a Boat
    }
}

const myCar: Car = { drive: () => console.log("Driving!") };
const myBoat: Boat = { sail: () => console.log("Sailing!") };

operate(myCar); // Output: Driving!
operate(myBoat); // Output: Sailing!
The vehicle is Car part was new to me. It’s called a type predicate. Basically, it’s a way to tell TypeScript, "Trust me, this thing is definitely a Car." Now, I can safely call drive() or sail() without fear of runtime errors.

The in Operator for Properties
Next, I learned about the in operator. It’s great for checking if an object has a certain property.

Here’s what I tried:

typescript
Copy code
interface Admin {
    privileges: string[];
}

interface Employee {
    startDate: Date;
}

function getDetails(person: Admin | Employee) {
    if ("privileges" in person) {
        console.log("Admin privileges:", person.privileges);
    } else {
        console.log("Employee start date:", person.startDate);
    }
}

const admin: Admin = { privileges: ["manage-users"] };
const employee: Employee = { startDate: new Date() };

getDetails(admin); // Output: Admin privileges: ["manage-users"]
getDetails(employee); // Output: Employee start date: [date]
This one felt more intuitive because I’m just checking for properties, like a detective looking for clues. 🕵️

Discriminated Unions: The MVP of TypeScript
Then, I found discriminated unions. These are like objects with a secret badge that tells you what type they are.

Here’s the practice code I wrote:

typescript
Copy code
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}

const myCircle: Circle = { kind: "circle", radius: 5 };
const myRectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };

console.log(calculateArea(myCircle)); // Output: 78.53981633974483
console.log(calculateArea(myRectangle)); // Output: 200
The kind property is like a secret handshake that lets TypeScript figure out the type. Super helpful for managing multiple object types in one function!

My Final Thoughts
I’m still new to TypeScript, but type guards have already saved me tons of time and headaches. They make your code safer, cleaner, and easier to understand. Whether you’re using typeof, instanceof, or writing your own custom guards, there’s no going back once you start using them.

If you’re a noob like me, my advice is: play around with type guards in small examples. It’s the best way to learn!

Happy coding! 🚀