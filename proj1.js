let cell={
    value:1,
    checked:false
}

let grid =[[cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell],
           [cell,cell,cell,cell,cell,cell,cell,cell,cell]];

let iter=0;
let guessvalue=1;
for (let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        grid[i][j].value= 0;
    }
}
console.log(grid);
//loops through all cells
