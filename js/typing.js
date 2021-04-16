window.onload = ()=>{
    // 表示する文字
    let newTxt = ["websites","illustration","pancake"];
    countTxt = 0;
    roopcount = 0;


    document.getElementById("startButton").onclick = ()=>{
        tyiping()
        console.log(newTxt.length);
    }

    function tyiping(){
        if(newTxt.length > roopcount){
            setTimeout(() => {
                if(newTxt[roopcount].length >= countTxt){
                    document.getElementById("typingTxt").innerHTML = newTxt[roopcount].substring(0,countTxt);
                    countTxt++
                    tyiping();
                }
                else{
                    roopcount++
                    countTxt = 0;
                    tyiping();
                }
            }, 200);
        }
        else{
            console.log("終了");
        }
    }
}


