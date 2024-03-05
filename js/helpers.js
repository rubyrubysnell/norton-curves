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

// set the changeable values as universal variables so that all functions can access them

let lineWeight = 0.5
let a = 9
let c = 4
let b = 40
let amp = 160

function drawNorton() {

    // draw background every time shape changes so that graphics don't draw on top of each other
    background(68,113,200)

    beginShape()

    noFill()

    // control the strokeWeight with a changeable variable, set above
    strokeWeight(lineWeight)

    // stroke colour
    stroke(245,218,237)

    // equation to draw Norton curve
    // radians not degrees - unsure of the required values to make equivalent shape
    for (let t = 0; t <= TWO_PI + 0.001  ; t+=0.009) {
        const radius = amp * (2 + 0.5 * sin(a * t))
        const theta = t + sin(b * t) / c

        // get cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(radius, theta)

        // draw the outer curve
        vertex(cartesianCoordinates.x, cartesianCoordinates.y)

        // draw the lines extruding from the outer curve
        // the multiplier changes the length of the lines / the amount of space in the centre
        // smaller number = longer lines / smaller space in centre
        line(cartesianCoordinates.x * 0.2, cartesianCoordinates.y * 0.2, cartesianCoordinates.x, cartesianCoordinates.y)

    }
    endShape()
}

// create variables for the slider and its value

let aSlider, bSlider, cSlider, ampSlider, weightSlider
let aVal, bVal, cVal, ampVal, weightVal

function setUpSliders() {

    // min value, max value, default value, increment
    aSlider = createSlider(-25, 25, 9, 1)
    aVal = createDiv()
    // attach a class - used to apply css styling
    aVal.class("text")

    bSlider = createSlider(3, 40, 16, 1)
    bVal = createDiv()
    bVal.class("text")

    cSlider = createSlider(1, 15, 4, 1)
    cVal = createDiv()
    cVal.class("text")

    ampSlider = createSlider(80, 180, 140, 1)
    ampVal = createDiv()
    ampVal.class("text")

    weightSlider = createSlider(0.2, 2, 0.5, 0.1)
    weightVal = createDiv()
    weightVal.class("text")

}

function updateSliders() {

    // variable is determined by the slider value
    a = aSlider.value()

    b = bSlider.value()

    c = cSlider.value()

    amp = ampSlider.value()

    lineWeight = weightSlider.value()

    // label each slider
    aVal.html("shape of curve")
    bVal.html("number of folds")
    cVal.html("size of folds")
    ampVal.html("overall size")
    weightVal.html("stroke weight")

}

