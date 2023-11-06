var images = ["px1.jpg","px2.jpg","px3.jpg","px4.jpg","px5.jpg"]

var left = false
var prevX = 1000
const throttleFunction=(func, delay)=>{
    let prev = 0; 
    return (...args) => {
    let now = new Date().getTime(); 
    // console.log(now-prev, delay);
    if(now - prev> delay){ 
        prev = now;
        return func(...args);  
    }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets)=>{
        // console.log('throttle')
        var div = document.createElement('div');
        div.classList.add('imagediv');
        console.log(dets.clientX,dets.clientY)
        div.style.left = dets.clientX+'px';
        var currX = dets.clientX-prevX
        prevX = dets.clientX
        div.style.top = dets.clientY+'px';
        // var path = Math.floor(Math.random() * 10);
        var img = document.createElement('img');
        // img.setAttribute("src",'px2.jpg')
        img.setAttribute("src",images[Math.floor(Math.random()*5)])

        div.appendChild(img);
        document.body.appendChild(div);
        if(currX>0){
            gsap.to(img,{
                y:"0",
                x:"50%",
                ease: Power1,
                duration: .2
            })
            gsap.to(img,{
                y:"30%",
                x:"65%",
                delay:.2,
                ease: Power3,
            })
            gsap.to(img,{
                y:"50%",
                x:"75%",
                delay:.2,
                ease: Power3,
            })
            gsap.to(img,{
                y:"100%",
                x:"100%",
                delay:.2,
                ease: Power3,
            })  
        }
        else if(prevX>=600 && prevX<=700){
            gsap.to(img,{
                y:"0",
                ease: Power1,
                duration: .6
            })
            gsap.to(img,{
                y:"100%",
                delay:.3,
                ease: Power3,
            })
        }
        else{
            gsap.to(img,{
                y:"0",
                x:"-50%",
                ease: Power1,
                duration: .2
            })
            gsap.to(img,{
                y:"30%",
                x:"-65%",
                delay:.2,
                ease: Power3,
            })
            gsap.to(img,{
                y:"50%",
                x:"-75%",
                delay:.2,
                ease: Power3,
            })
            gsap.to(img,{
                y:"100%",
                x:"-100%",
                delay:.2,
                ease: Power3,
            })  
        }
        
        setTimeout(() => {
            div.remove();
        }, 2000);
    },400)
)
