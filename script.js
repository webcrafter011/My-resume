const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function movecircle(xscale = 1, yscale = 1) {
  let circle = document.getElementById("minicircle");
  window.addEventListener("mousemove", function (event) {
    let x = event.clientX + 10;
    let y = event.clientY + 10;
    circle.style.transform = `translate(${x}px, ${y}px) scale(${xscale}, ${yscale})`;
  });
}

movecircle();

function circlechipta() {
  let time;
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (event) {
    xscale = gsap.utils.clamp(
      0.3,
      1.7,
      Math.abs(event.clientX - xprev) / 100 + 1
    );
    yscale = gsap.utils.clamp(
      0.3,
      1.7,
      Math.abs(event.clientY - yprev) / 100 + 1
    );

    xprev = event.clientX;
    yprev = event.clientY;
    console.log(xscale, yscale);
    movecircle(xscale, yscale);

    clearTimeout(time);
    time = setTimeout(function () {
      let circle = document.getElementById("minicircle");
      circle.style.transform = `translate(${xprev}px, ${yprev}px) scale(1, 1)`;
    }, 100);
  });
}
circlechipta();
