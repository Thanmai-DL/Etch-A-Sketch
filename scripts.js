const box = document.querySelector('#box')
let x=16

//Loop to add x number of rows to box
for(let i=0; i<x;i++) {
    const gridRow = document.createElement('div')
    gridRow.setAttribute('id','grid')
    box.append(gridRow)
}

const gridRow = document.querySelectorAll('#grid')
//Loop to add x number of columns to each row
for(let i=0; i<x; i++) {
    for(let j=0; j<x; j++) {
        const gridCol = document.createElement('div')
        gridCol.setAttribute('id','grid-element')
        gridRow[i].append(gridCol)
    }
}

const gridElements = document.querySelectorAll('#grid-element')
box.addEventListener('mousedown',triggerFillColor)
box.addEventListener('mouseup',stopFillColor)
function triggerFillColor() {
    gridElements.forEach((item) => item.addEventListener('mouseenter',fillColor)) //Fills color on mouse hover
    gridElements.forEach((item) => item.addEventListener('mousedown',fillColor)) //Fills color on mouse down
}

function fillColor(e) {
    e.target.style.backgroundColor = 'black'
}

//Function to stop filling color on mouse up on box element
function stopFillColor() {
    gridElements.forEach((item) => item.removeEventListener('mouseenter',fillColor))
}