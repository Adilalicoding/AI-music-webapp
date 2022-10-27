function setup() {
    canvas = creatCanvas(600, 500);
    canvas.center();
}

      video = creatCapture(VIDEO);
      video.hide();  


  function draw()  {
      Image(video, 0, 0, 600, 500);
  }

     
