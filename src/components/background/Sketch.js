
'use-strict'


export default function sketch(p5) {

    // ~~~~~~ Initialize variables ~~~~~~~~~
    let t;
    let canvas;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let x, y, d;
    let centeringParameter = 0;

    function setDimensions() {
        w = p5.windowWidth-12;
        h = p5.windowHeight;
        p5.resizeCanvas(w - centeringParameter, h - centeringParameter)
    }

    function centerCanvas() {
        const x_center = (p5.windowWidth - w) /2;
        const y_center = (p5.windowHeight - h) /2;
        canvas.position(x_center + (centeringParameter / 2), y_center + (centeringParameter / 2))
        canvas.position(0,0);
      }
    // ~~~~~~ React lifecycle methods ~~~~~~
    p5.preload = () => {

    }

    // ~~~~~~ Setup ~~~~~~
    p5.setup = () => {
        //canvas = p5.createCanvas(w - centeringParameter, h - centeringParameter)
        canvas = p5.createCanvas(w, h)
        canvas.style('z-index','-1');
        
        canvas.position(0,0)
        canvas.style('display', 'block');
        //centerCanvas()
        t = 0;

    }

    // ~~~~~~ Draw ~~~~~~
    p5.draw = () => {
        p5.background(12, 12, 12);
        t += .0008;
        
        p5.textSize(40);

                    
        // p5.fill(255,255,255); /* setting text police fill */
        // p5.stroke(216,255,212,80); /* setting line strokes color */
        // p5.text("__Bambounou",35,50)
        

        for (let j = 2; x = y = j--;){  // j >0
            for (let i = w-200; d = p5.noise(t - i / 99) * 3, i--; x += Math.cos(d) * 6, y += Math.sin(d) * 6, i>0){  // i >0
                 if (j){ i - w / 2 || (p5.translate)(-x, -y) ;
                }else{ 
                      p5.push() ;
                      //p5.translate(x + w / 2, y + w / 2) ;
                      p5.translate(x+w/2,y-800+w/2) ;
                      p5.rotate  (d + Math.PI / 4)    ;
                      //p5.stroke(216,255,212,80);
                      p5.stroke(50,50,80,100);
                      
                      p5.line(-600, 100, 600, 100) ;
                      
                      p5.colorMode("HSB");
                      p5.strokeWeight(0);
                      p5.pop(i % 100 || p5.scale(20) + 
                      p5.text("", Math.cos(i) * 12 - 7, Math.sin(i - t) * 1));
                      //p5.fill(216,255,212,170);
                      //p5.fill(216,1,1,170);
                      p5.fill(21,1,1,170);
                      
                  }  
                  
              
          }
        }
    }

    // ~~~~~~ Other commonly used p5 methods
    p5.windowResized = () => {
        setDimensions();
        centerCanvas();
    }


    // ~~~~~~ Helper functions ~~~~~~~~~

    // ~~~~~~ Classes ~~~~~~~~~~~~

}