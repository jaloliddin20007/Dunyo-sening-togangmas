let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volumeUp = document.getElementById("volume-up");
let volumeDown = document.getElementById("volume-down");
let replayIcon = document.getElementById("replay-icon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = 0;
}

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value;
};

volumeUp.addEventListener("click", function () {
    if (song.volume < 1) {
        song.volume += 1;
    }
});

volumeDown.addEventListener("click", function () {
    if (song.volume > 0) {
        song.volume -= 1;
    }
});
replayIcon.addEventListener("click", function () {
    song.currentTime = 0;
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

song.onended = function () {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    progress.value = 0;
};