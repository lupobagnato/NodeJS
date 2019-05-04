var rect = require ('./rectangle');

function solveRect(l,b) {
    console.log("Solving with l= "+ l + " , b = " + b);

    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("Area="+rectangle.area()+" ("+l+","+b+")");
            console.log("Perim="+rectangle.perimeter()+" ("+l+","+b+")");

        }
    });

    console.log("---> after the call to rectangle");
}


solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-3,4);
