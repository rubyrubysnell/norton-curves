function setup() {

    // fill the browser window

    createCanvas(windowWidth, windowHeight);

    // blue background

    background(68,113,200)

    // draw the sliders, from the helpers

    setUpSliders()

}
  
function draw() {

    // centre the graphic
    
    translate(width / 2, height / 2)

    // draw the graphic, from the helpers

    drawNorton()

    // draw according to the slider values, from the helpers

    updateSliders()

}

