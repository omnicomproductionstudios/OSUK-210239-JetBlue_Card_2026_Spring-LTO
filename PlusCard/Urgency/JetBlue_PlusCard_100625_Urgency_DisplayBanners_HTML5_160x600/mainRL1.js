var tl;
var tl2;
var startTime;

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
tl.set(['#copy2', '#copy3'], { y: 20, autoAlpha: 0 }); 
tl.set(['#copy4', '#cta'], { y: 20, autoAlpha: 0 }); 

tl.addLabel('frame1', 0)
  .to(copy1, 1, { autoAlpha: 1, ease: "power1.inOut" }, 'frame1')
  .to(copy1, 0.5, { autoAlpha: 0, ease: "power1.inOut" }, 'frame1+=3.5')
  .to(offer, 0.5, { x: -100, autoAlpha: 0, ease: "power1.inOut" }, 'frame1+=3.5')
  .addLabel('frame2', 'frame1+=4')
  .to(copy2, 1, { y: 0, autoAlpha: 1, ease: "power3.out" }, 'frame2')
  .to(copy2, 0.5, { autoAlpha: 0, ease: "power1.inOut" }, 'frame2+=3.5')
  .addLabel('frame3', 'frame2+=4')
  .to(copy3, 1, { y: 0, autoAlpha: 1, ease: "power3.out" }, 'frame3')
  .addLabel('frame4', 'frame3+=4')
    .to(copy3, 0.5, { autoAlpha: 0, ease: "power1.inOut" }, 'frame4')
    .to('#lastFrame',0.8,{y: 0, ease: Power1.easeInOut}, 'frame4+=0.2')
    .to(['#copy4', '#cta'],0.8,{y: 0, autoAlpha:1, ease: "power3.out"}, 'frame4+=1')
    .to('#shine', 0.5, {backgroundPosition: '146px 0px'}, 'frame4+=1.5');
}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {
  startTime = new Date();
  tl = new TimelineMax({onComplete: logDuration});
  animate();
  setRollover();		
}

function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " + ((endTime - startTime) / 1000).toFixed(2) + " seconds"
  );
}

