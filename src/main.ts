const counter = document.getElementById("counter")!;

function counterEquis() {
  let n = 0;
  let i = 100;
  const intervalId = setInterval(() => {
    n++;
    i--;
    console.log(n);
    if (n >= 10) {
      document.getElementById("background")!.style.filter = `blur(${i}px)`;
    }

    counter.style.opacity = `${i / 100}`;
    counter.textContent = `${n}%`;

    if (n === 100) {
      clearInterval(intervalId);
    }
  }, 30);
}

counterEquis();
