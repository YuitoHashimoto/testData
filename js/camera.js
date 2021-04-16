window.onload = ()=>{
    const cameraSize = { w: 360, h: 240 };
    const canvasSize = { w: 360, h: 240 };
    const resolution = { w: 360, h: 240 };
    let video;
    let media;
    let canvas;
    let canvasCtx;
    
    // video要素をつくる
    video          = document.createElement('video');
    video.id       = 'video';
    video.width    = cameraSize.w;
    video.height   = cameraSize.h;
    video.autoplay = true;
    document.getElementById('videoPreview').appendChild(video);
    
    // video要素にWebカメラの映像を表示させる
    media = navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { ideal: resolution.w },
        height: { ideal: resolution.h }
      }
    }).then(function(stream) {
      video.srcObject = stream;
    });
    
    // canvas要素をつくる
    canvas        = document.createElement('canvas');
    canvas.id     = 'canvas';
    canvas.width  = canvasSize.w;
    canvas.height = canvasSize.h;
    document.getElementById('canvasPreview').appendChild(canvas);
    
    // コンテキストを取得する
    canvasCtx = canvas.getContext('2d');

    // video要素の映像をcanvasに描画する
    _canvasUpdate();
    
    function _canvasUpdate() {
        document.getElementById("start").onclick = ()=>{

        let random = Math.round( Math.random()*100 );

        if(random>50){
            randomTxt = "陽キャ力";
            console.log(canvasCtx);
        }
        else{
            randomTxt = "陰キャ力";
        }

        video.pause();
        setTimeout(() => {
            video.play();
        }, 1000);
        let subCanvas = document.getElementById("sub");
        subCanvas.width = canvasSize.w;
        subCanvas.height = canvasSize.h;

        const ctx = subCanvas.getContext("2d");


        // 色取得
        let x = 100;
        let y = 100;
        let conImg = canvasCtx.getImageData(x,y,1,1);

        let r = conImg.data[0];
        let g = conImg.data[1];
        let b = conImg.data[2];
        let a = conImg.data[3];
        console.log(r,g,b,a);



        ctx.drawImage(video,0,0,subCanvas.width,subCanvas.height)
        ctx.font = "48px serif";
        ctx.strokeText(`${randomTxt}:${r+g+b+a}`,10,50);
  
        requestAnimationFrame(_canvasUpdate);
    }
    
      canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);

      requestAnimationFrame(_canvasUpdate);


    };
}

