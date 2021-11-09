const section = document.getElementById('achievements');
var count = false;

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

window.addEventListener('scroll', () => {
    if (section.getBoundingClientRect.top = window.innerHeight && count == false) {
        count = true;
        //FIRST NUMBER
        const obj = document.getElementById("number-one");
        animateValue(obj, 0, 550, 3000);

        //SECOND NUMBER
        const obj2 = document.getElementById("number-two");
        animateValue(obj2, 0, 4400, 3000);

        //THIRD NUMBER
        const obj3 = document.getElementById("number-three");
        animateValue(obj3, 0, 96, 3000);

        
    };
});

