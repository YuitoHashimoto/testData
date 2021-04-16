window.onload = ()=>{
    let num = 1
    let answer = [];
    let comp = [];
    

    for(num=1; num<=9; num++){
        for(i=1; i<=9; i++){
            comp.push(num*i);
        }
        answer.push(comp);
        console.log(answer);
        comp = [];
    }



    

    let rows = [];
    let rowsCount  = 0;
    let table = document.createElement("table");

    answer.forEach(rowsTxt => {
        rows.push(table.insertRow(-1))
        answer[rowsCount].forEach(cellTxt =>{
            cell = rows[rowsCount].insertCell(-1);
            cell.appendChild(document.createTextNode(cellTxt));
            ;
        });
        rowsCount ++;
    });

    

    document.getElementById("numTable").appendChild(table);


    let btns = document.querySelectorAll(".btn");
    i = 0;
    btns.forEach(element => {
        btns[i].onclick = (event)=>{
            console.log(event.target);
            event.target.style.display = "none";
        }
        i++
    });
}