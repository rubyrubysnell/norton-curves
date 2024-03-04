// a function that translates radius and theta to Cartesian coordinates
// and returns x and y in an object

function transformPolarToCartesian(radius, theta) {
    // calculate x and y using the sine and cosine formula
    const x = radius * cos(theta);
    const y = - radius * sin(theta);

    // store x and y inside cartesianCoordinates object
    // from now on cartesianCoordinates.x is the same as x
    // from now on cartesianCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }

    // return the stored data so that it can be used outside of the function
    return cartesianCoordinates;
}

let lineWeight = 0.5
let a = 9
let c = 4
let b = 40

function drawNorton() {

background(68,113,200)
    let amp = 160
    beginShape()
    noFill()
    strokeWeight(lineWeight)
    stroke(245,218,237)
    // 
    for (let t = 0; t <= TWO_PI + 0.001  ; t+=0.009) {
        const radius = amp * (2 + 0.5 * sin(a * t))
        const theta = t + sin(b * t) / c

        // get cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(radius, theta)

        vertex(cartesianCoordinates.x, cartesianCoordinates.y)

        line(cartesianCoordinates.x * 0.2, cartesianCoordinates.y * 0.2, cartesianCoordinates.x, cartesianCoordinates.y)

    }
    endShape()
}

