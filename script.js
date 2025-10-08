let timer;
let isRunning = false;
let elapsedTime = 0;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
  document.getElementById("time").innerText = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (isRunning) {
    const lap = document.createElement("p");
    lap.textContent = formatTime(elapsedTime);
    document.getElementById("laps").appendChild(lap);
  }
}

updateDisplay();
