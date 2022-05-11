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

for (let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        //vertical check
        for(let k=0;k<9;k++){
            if(grid[i][k].value==guessvalue){
                guessvalue++;
                k=0;
            }
        }

        //horizontal
        for(let k=0;k<9;k++){
            if(grid[i][k].value==guessvalue){
                guessvalue++;
                k=0;
            }
        }


    }
}