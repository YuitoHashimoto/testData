'use strict';

window.onload = () => {
    const slideDom = document.querySelectorAll('.transDom'),
          slideWidth = document.querySelector('.transDom').clientWidth,
          leftBtn = document.querySelector('.slideWrap__left'),
          rightBtn = document.querySelector('.slideWrap__right');

    let transLeft = -200;
    let transCenter = -200;
    let transRight = -200;
    let count = 2;
    let transTime = 500;
    let flag = true;
    let btnDelay = 1000;
    let directionSwitch = "";

    console.log(slideDom);

    // leftBtnクリック時
    leftBtn.onclick = () => {
        if (flag) {
            // z-indexの切替
            if (directionSwitch == "right" || directionSwitch == "") {
                slideDom[0].style.zIndex = 1;
                slideDom[1].style.zIndex = 1;
                slideDom[2].style.zIndex = 0;
                console.log(count);
                switch (count) {
                    case 0:
                        count = 1;
                    break;
                    case 1:
                        count = 0;
                    break;
                    case 2:
                        count = 2;
                    break;
                }
                setTimeout(() => {
                    
                }, transTime);
            }else{

            }

            // Btnフラグ切替(連打防止)
            flag = false;

            // スライド移動
            slideDom[0].style.transform = `translateX(${transLeft += slideWidth}px)`;
            slideDom[1].style.transform = `translateX(${transCenter += slideWidth}px)`;
            slideDom[2].style.transform = `translateX(${transRight += slideWidth}px)`;
            
            // 次スライドに備えて一番右の要素移動        
            switch (count) {
                case 0: 
                    slideDom[count].style.transform = `translateX(${transLeft -= slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:0 "+count)
                        slideDom[0].style.zIndex = 1;
                        slideDom[1].style.zIndex = 1;
                        slideDom[2].style.zIndex = 0;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);
                break;
    
                case 1: 
                    slideDom[count].style.transform = `translateX(${transCenter -= slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:1 "+count)
                        slideDom[1].style.zIndex = 1;
                        slideDom[2].style.zIndex = 1;
                        slideDom[0].style.zIndex = 0;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);

                break;
    
                case 2:
                    slideDom[count].style.transform = `translateX(${transRight -= slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:2 "+count)
                        slideDom[0].style.zIndex = 1;
                        slideDom[2].style.zIndex = 1;
                        slideDom[1].style.zIndex = 0;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);
                break;
            }
    
            // countの制御
            count -= 1;
            if(count == -1){
                count = 2;
            }

            // directionSwitch切替
            directionSwitch = "left";
        }
        else {
            return false;
        }
    }

    // rightBtnクリック時
    rightBtn.onclick = () => {
        if (flag) {
            // z-indexの切替
            if (directionSwitch == "left" || directionSwitch == "") {
                slideDom[0].style.zIndex = 0;
                slideDom[1].style.zIndex = 1;
                slideDom[2].style.zIndex = 1;
                console.log(count);
                switch (count) {
                    case 0:
                        count = 1;
                    break;
                    case 1:
                        count = 0;
                    break;
                    case 2:
                        count = 2;
                    break;
                }
            }

            // Btnフラグ切替(連打防止)
            flag = false;

            // スライド移動
            slideDom[0].style.transform = `translateX(${transLeft -= slideWidth}px)`;
            slideDom[1].style.transform = `translateX(${transCenter -= slideWidth}px)`;
            slideDom[2].style.transform = `translateX(${transRight -= slideWidth}px)`;
            
            // 次スライドに備えて一番右の要素移動        
            switch (count) {
                case 0: 
                    slideDom[2].style.transform = `translateX(${transRight += slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:0 "+count)
                        slideDom[0].style.zIndex = 0;
                        slideDom[1].style.zIndex = 1;
                        slideDom[2].style.zIndex = 1;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);
                break;
    
                case 1: 
                    slideDom[1].style.transform = `translateX(${transCenter += slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:1 "+count)
                        slideDom[2].style.zIndex = 0;
                        slideDom[1].style.zIndex = 1;
                        slideDom[0].style.zIndex = 1;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);

                break;
    
                case 2:
                    slideDom[0].style.transform = `translateX(${transLeft += slideWidth*3}px)`;
                    setTimeout(() => {
                        console.log("end:2 "+count)
                        slideDom[1].style.zIndex = 0;
                        slideDom[0].style.zIndex = 1;
                        slideDom[2].style.zIndex = 1;
                    }, transTime);
                    setTimeout(() => {
                        flag = true;
                    }, btnDelay);
                break;
            }
    
            // countの制御
            count -= 1;
            if(count == -1){
                count = 2;
            }

            // directionSwitch切替
            directionSwitch = "right";
        }
        else {
            return false;
        }
    } 
}