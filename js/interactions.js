// function triggers every time the user scrolls

function mouseWheel(event) {
    // delta means increment
    // if the user is scrolling quickly, it will be higher, and vice versa
    const deltaWheel = event.delta * 0.1
    //update offset
    test = a + deltaWheel
    console.log(a)

    if(test < 49 && test > -41){
        a = a + deltaWheel
    }
}