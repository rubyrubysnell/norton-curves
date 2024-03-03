// function triggers every time the user scrolls

function mouseWheel(event) {
    // delta means increment
    // if the user is scrolling quickly, it will be higher, and vice versa
    const deltaWheel = event.delta * 0.1
    //update offset
    amp = amp + deltaWheel
}