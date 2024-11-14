{
    //     Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    // // Sample Input 1:
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    // // Sample Output 1:
    // 78.54;

    // // Sample Input 2:
    // const rectangleArea = calculateShapeArea({
    //   shape: "rectangle",
    //   width: 4,
    //   height: 6,
    // });

    // // Sample Output 2:
    // 24;

    type Circle = {
        shape: 'circle';
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        height: number;
        width: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return 3.1416 * shape.radius * shape.radius
        } else if (shape.shape === "rectangle") {
            return shape.height * shape.width
        }
        throw new Error("unknown shape")
    }

    const result = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    })
    console.log(result);

    const result2 = calculateShapeArea({  
        shape: "circle",
        radius: 5
    })
    console.log(result2);
















}