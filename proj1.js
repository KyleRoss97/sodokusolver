let cell={
    value:0,
    locked:false,
    cellnum:[1,1,1,1,1,1,1,1,1,1]
}

let grid = [];

let arr =[];




let guessvalue=1;
for (let i=0;i<81;i++){
        grid.push({value: -1,locked:false,cellnum:[1,1,1,1,1,1,1,1,1,1]});
    
}

grid[1].locked=false;
grid[1].value=3;
grid[10].locked=true;
grid[10].value=3;
//console.log(checkrow(20));
//loops through all cells
let iterator=0;
let i =1;
let fail=0;
console.log(getbox(1));
console.log(getbox(10));
console.log("aaa");
console.log(checkbox(1));
console.log("aaa");
while(iterator<81){
    

        while(i<10){
            printgrid();
            console.log(iterator);

            if(iterator==81){
                break;
            }
            if(grid[iterator].locked==true){
                iterator++;
            }
            if(grid[iterator].cellnum[i]==1){

                grid[iterator].value=(i);
                if(check(iterator)){
                    
                    grid[iterator].cellnum[i]=0;
                    iterator++;
                    i=0;
                }else{
                    grid[iterator].value=-1;
                    grid[iterator].cellnum[i]=0;
                    
                }
            }
            i++;
        }
        if(iterator==81){
            console.log("Solved!");
            break;
        }
            
            grid[iterator].value=-1;
            
               
            
            for(let j=0;j<9;j++){
                 grid[iterator].cellnum[j]=1;
             }
            
             iterator--;
            i=1;
            
            // i=1;
            
        
        
        
      
    

}

function printgrid(){
    
    console.log( "\n"+grid[0].value,grid[1].value,
        grid[2].value,
        grid[3].value,
        grid[4].value,
        grid[5].value,
        grid[6].value,
        grid[7].value,
        grid[8].value +"\n",
        grid[9].value,
        grid[10].value,
        grid[11].value,
        grid[12].value,
        grid[13].value,
        grid[14].value,
        grid[15].value,
        grid[16].value,
        grid[17].value+"\n",
        grid[18].value,
        grid[19].value,
        grid[20].value,
        grid[21].value,
        grid[22].value,
        grid[23].value,
        grid[24].value,
        grid[25].value,
        grid[26].value+"\n",
        grid[27].value,
        grid[28].value,
        grid[29].value,
        grid[30].value,
        grid[31].value,
        grid[32].value,
        grid[33].value,
        grid[34].value,
        grid[35].value+"\n",
        grid[36].value,
        grid[37].value,
        grid[38].value,
        grid[39].value,
        grid[40].value,
        grid[41].value,
        grid[42].value,
        grid[43].value,
        grid[44].value+"\n",
        grid[45].value,
        grid[46].value,
        grid[47].value,
        grid[48].value,
        grid[49].value,
        grid[50].value,
        grid[51].value,
        grid[52].value,
        grid[53].value+"\n",
        grid[54].value,
        grid[55].value,
        grid[56].value,
        grid[57].value,
        grid[58].value,
        grid[59].value,
        grid[60].value,
        grid[61].value,
        grid[62].value+"\n",
        grid[63].value,
        grid[64].value,
        grid[65].value,
        grid[66].value,
        grid[67].value,
        grid[68].value,
        grid[69].value,
        grid[70].value,
        grid[71].value+"\n",
        grid[72].value,
        grid[73].value,
        grid[74].value,
        grid[75].value,
        grid[76].value,
        grid[77].value,
        grid[78].value,
        grid[79].value,
        grid[80].value+"\n"+"\n",);
 
        
    
}


function getx(gridnum){
    return (gridnum)%9;
}

function gety(gridnum){
   return ((gridnum-getx(gridnum))/9);
}
 
function getbox(gridnum){
    x=getx(gridnum);
    y=gety(gridnum);

    if(x<=2){
        if(y<=2){
            return 1;
        }else if(y<=5){
            return 4;
        }else if(y<=8){
            return 7;
        }
    }
    if(x<=5){
        if(y<=2){
            return 2;
        }else if(y<=5){
            return 5;
        }else if(y<=8){
            return 8;
        }
    }

    if(getx(gridnum)<=8){
        if(y<=2){
            return 3;
        }else if(y<=5){
            return 6;
        }else if(y<=8){
            return 9;

        }
    }
}

/*
function getbox(gridnum){
    if(getrow(gridnum)<=3){
        if(getcol<=3){
            return 1;
        }else if(getcol<=6){
            return 4;
        }
    }
}
*/

// function checkrow(gridnum){
//     let firstrow = (gridnum)-getcol(gridnum);
//     return firstrow;
// }

function check(gridnum){
    if(gridnum<0){
        return 0;
    }
    if(checkcol(gridnum)&&checkrow(gridnum)&&checkbox(gridnum)){
        return 1;
    }else{
        return 0;
    }
}
function checkbox(gridnum){
    for(let i=0;i<81;i++){
        
        if(getbox(i)==getbox(gridnum)){
            if((gridnum!=i)&&grid[gridnum].value==grid[i].value){
                return 0;
            }
        }
    }
    return 1;
}
function checkcol(gridnum){
    let place = getx(gridnum);
    let checknum = grid[gridnum].value;

    for(let i=0;i<9;i++){
        if(!(place==gridnum)&&(grid[place].value==checknum)){
            return 0;
        }
        place=place+9;
    }
    return 1;
}

function checkrow(gridnum){
    let place = gety(gridnum)*9;
    let checknum= grid[gridnum].value;

    for(let i=0;i<9;i++){
        if(!(place==gridnum)&&(grid[place].value==checknum)){
            return 0;
        }
        place=place+1;
    }
    return 1;
}
