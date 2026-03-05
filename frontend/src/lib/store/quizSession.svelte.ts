export const quizSession = $state({
    secondsElapsed: 0,
    startTime: 0,
    isRunning: false
});

let interval: any;

export const startTimer = () => {
    if (quizSession.isRunning) return;
    quizSession.startTime = Date.now();
    quizSession.isRunning = true;
    interval = setInterval(() => {
        quizSession.secondsElapsed++;
    }, 1000);
};

export const stopTimer = () => {
    quizSession.isRunning = false;
    if (interval) clearInterval(interval);
};

export const resetTimer = () => {
    stopTimer();
    quizSession.secondsElapsed = 0;
};

export const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [hrs, mins, secs]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(" : ");
};
