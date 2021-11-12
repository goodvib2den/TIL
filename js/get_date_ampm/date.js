const clockDom = document.querySelector(".date");

function clock() {
  const date = new Date();
  const hours = date.getHours();
  console.log(typeof hours);
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours > 12) {
    const pmHours = String(hours - 12).padStart(2, "0");
    clockDom.innerText = `PM ${pmHours}:${minutes}:${seconds}`;
  } else {
    clockDom.innerText = `AM ${hours}:${minutes}:${seconds}`;
  }
}

clock();
setInterval(clock, 1000);
