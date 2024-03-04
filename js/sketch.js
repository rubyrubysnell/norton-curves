let aSlider, bSlider, cSlider
let aVal, bVal, cVal

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(68,113,200)

    aSlider = createSlider(-25, 25, 9, 1)
    aVal = createDiv()

    bSlider = createSlider(3, 40, 16, 1)
    bVal = createDiv()

    cSlider = createSlider(-15, 15, 4, 1)
    cVal = createDiv()

}
  
function draw() {
    
    translate(width / 2, height / 2)

    drawNorton()

    a = aSlider.value()

    b = bSlider.value()

    c = cSlider.value()

    aVal.html("a")
    bVal.html("b")
    cVal.html("c")

}

