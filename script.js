var myDiv = document.getElementById('shit');
function convertCursorPosition(x, y) {
    const maxX = 15;
    const maxY = 15;
    const minX = -15;
    const minY = -15;

    const convertedX = (x / window.innerWidth) * (maxX - minX) + minX;

    const convertedY = (y / window.innerHeight) * (maxY - minY) + minY;

    return { x: convertedX, y: convertedY };
}

function handleMouseMove(event) {
    const originalX = event.clientX;
    const originalY = event.clientY;
    const convertedPosition = convertCursorPosition(originalX, originalY);            
    
    myDiv.style.backgroundPosition = `calc(50% + ${convertedPosition.x * -1}px) calc(50% + ${convertedPosition.y * -1}px)`
}
var cont = document.getElementById("da_section");
cont.addEventListener('mousemove', handleMouseMove);


let isDragging = false;
let startX;
let scrollLeft;

const draggableList = document.getElementById('project-carousel');

draggableList.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - draggableList.offsetLeft;
    scrollLeft = draggableList.scrollLeft;
});

draggableList.addEventListener('mouseleave', () => {
    isDragging = false;
});

draggableList.addEventListener('mouseup', () => {
    isDragging = false;
});

draggableList.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - draggableList.offsetLeft;
    const walk = (x - startX) * 2;
    draggableList.scrollLeft = scrollLeft - walk;
});

let isDragging2 = false;
let startX2;
let scrollLeft2;

const draggableList2 = document.getElementById('da_thing_2');

draggableList2.addEventListener('mousedown', (e) => {
    isDragging2 = true;
    startX2 = e.pageX - draggableList2.offsetLeft;
    scrollLeft2 = draggableList2.scrollLeft;
});

draggableList2.addEventListener('mouseleave', () => {
    isDragging2 = false;
});

draggableList2.addEventListener('mouseup', () => {
    isDragging2 = false;
});

draggableList2.addEventListener('mousemove', (e) => {
    if (!isDragging2) return;
    e.preventDefault();
    const x2 = e.pageX - draggableList2.offsetLeft;
    const walk2 = (x2 - startX2) * 2;
    draggableList2.scrollLeft = scrollLeft2 - walk2;
});