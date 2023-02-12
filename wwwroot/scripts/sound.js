let audio;
export function loadAudioFirstTime() {
    audio = new Audio("sound/correct.mp3");
    audio.load();
    return audio
}
export function loadAudio() {
    audio.load();
    return audio
}
export function playAudio() {
    audio.play();
}
export function disposeAudio() {
    if (audio && audio.parentNode) {
        audio.parentNode.removeChild(audio);
    }
}