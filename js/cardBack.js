window.onload=()=>{
    // ステートセット
    let dDeck = [0,10,20,30,40,50,60,70,80,90,100],
        chara = ["Inkya","Otaku","Yankee","Mazime","Youkya"],
        master = [[],[]],
        npc1 = [[],[]],
        npc2 = [[],[]],
        npc3 = [[],[]],
        user = [master,npc1,npc2,npc3],
        gameFiled = [],
        uBox = document.querySelectorAll('.uBox'),
        deckCount = 0,
        dataCount = 0,
        cpuCount = 0;
        flag = true;

    // ユーザーにカードを配る
    // document.querySelector("#button").onclick = ()=>{
    for (let i = 0; i<5; i++){
        master[0].push(dDeck[Math.floor(Math.random() * dDeck.length)]);
        npc1[0].push(dDeck[Math.floor(Math.random() * dDeck.length)]);
        npc2[0].push(dDeck[Math.floor(Math.random() * dDeck.length)]);
        npc3[0].push(dDeck[Math.floor(Math.random() * dDeck.length)]);
    }
    for (let i = 0; i<5; i++){
        master[1].push(chara[Math.floor(Math.random() * chara.length)]);
        npc1[1].push(chara[Math.floor(Math.random() * chara.length)]);
        npc2[1].push(chara[Math.floor(Math.random() * chara.length)]);
        npc3[1].push(chara[Math.floor(Math.random() * chara.length)]);
    }

    user.forEach(element => {
        element[0].forEach(deck => {
            let div = document.createElement("div");
            div.innerHTML = deck;
            if (deckCount ===  0) {
                div.classList.add('masterCard');
            }
            else {
                div.classList.add(`cpu${deckCount}Card`);
            }
            div.classList.add('num');
            div.setAttribute('data-id',dataCount)
            div.setAttribute('data-num',deck)
            div.setAttribute(
                'data-chara',
                element[1][cpuCount]
            );
            uBox[deckCount].appendChild(div);
            dataCount++;
            cpuCount++
        });
        deckCount++;
        dataCount = 0;
        cpuCount = 0;
    });

    // ゲーム処理
    let masterCard = Array.from(document.querySelectorAll('.masterCard'));

    masterCard.forEach(card => {
        card.onclick = (e) => {
            let cpu1Dom = document.querySelectorAll(`.cpu1Card`),
                cpu2Dom = document.querySelectorAll(`.cpu2Card`),
                cpu3Dom = document.querySelectorAll(`.cpu3Card`),
                cpuDom = [cpu1Dom,cpu2Dom,cpu3Dom],
                winCard = null;
    
            if (flag) {
                flag = false;
                gameFiled.push(e.target);
                e.target.remove();
                console.log(`
                    プレイヤー：${gameFiled[0].classList[0]}、
                    数：${gameFiled[0].dataset.num}、
                    キャラ：${gameFiled[0].dataset.chara}
                `)

    
                // cpuのカードをgameFiledに追加
                const cardAdd = () => {
                    return new Promise((resolve) => {
                        const timer = () => {
                            setTimeout(() => {
                                gameFiled.push(cpuDom[cpuCount][0])
                                console.log(`
                                    プレイヤー：${cpuDom[cpuCount][0].classList[0]}、
                                    数：${cpuDom[cpuCount][0].dataset.num}、
                                    キャラ：${cpuDom[cpuCount][0].dataset.chara}
                                `)
                                cpuDom[cpuCount][0].remove();

                                if (cpuCount === 2) {
                                    cpuCount = 0;
                                    resolve();
                                } else {
                                    cpuCount ++;
                                    timer();
                                }
                            }, 500);
                        }
                        timer();
                    });
                }

                cardAdd().then((resolve) => {
                    // キャラによって数値を変更する
                    gameFiled.forEach(element => {
                        let cardNum = Number(element.dataset.num),
                            cardChara = element.dataset.chara;
        
                        switch (cardChara) {
                            case "Inkya":
                                num = 0;
                                element.setAttribute('data-num', cardNum+num)
                            break;
                            case "Otaku":
                                num = 1;
                                element.setAttribute('data-num', cardNum+num)
                            break;
                            case "Yankee":
                                num = 2;
                                element.setAttribute('data-num', cardNum+num)
                            break;
                            case "Mazime":
                                num = 3;
                                element.setAttribute('data-num', cardNum+num)
                            break;
                            case "Youkya":
                                num = 4;
                                element.setAttribute('data-num', cardNum+num)
                            break;
                        }
                    });
        
                    let result = Math.max(
                        gameFiled[0].dataset.num,
                        gameFiled[1].dataset.num,
                        gameFiled[2].dataset.num,
                        gameFiled[3].dataset.num, 
                    );
        
                    // プレイヤー情報ログに表示
                    gameFiled.forEach(element => {
                        if (Number(element.dataset.num) === result) {
                            winCard = element;
                        }
                    });

                    // 結果表示
                    setTimeout(() => {
                        console.log(`リザルト：${winCard.classList}、数字：${result}`);
                        document.querySelector('#gameFiled > p').innerHTML = `リザルト：${winCard.classList[0]}、数字：${result}`;

                        flag = true;
                        gameFiled = [];
                        console.log(masterCard);
                    }, 500);
                })
            }
        }
    });



    // // promise
    // const promiseFunc = () => {
    //     return new Promise((resolve)=> {
    //         setTimeout(() => {
    //             console.log("aaaa");
    //             resolve();
    //         }, 5000);
    //     });
    // }

    // promiseFunc().then((resolve)=> {
    //     console.log(resolve);
    // });
}

