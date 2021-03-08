export const dragElement = (element) => {
    // Allows drag track handler
    let pos1 = 0, pos2 = 0

    element.onmousedown = dragMouseDown

    function dragMouseDown(e) {
        e = e || window.event
        e.preventDefault()
        pos2 = e.clientX
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
    }

    function elementDrag(e) {
        e = e || window.event
        e.preventDefault()
        pos1 = pos2 - e.clientX
        pos2 = e.clientX
        let newPosition = element.offsetLeft - pos1
        if (newPosition >= 0 && newPosition <= 590) {
            element.style.left = `${newPosition}px`
        }
    }

    function closeDragElement() {
        document.onmouseup = null
        document.onmousemove = null
    }
}
