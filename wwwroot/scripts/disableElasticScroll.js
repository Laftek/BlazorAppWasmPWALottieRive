let touchMoveListener = null;
export function disableElasticScroll() {
    touchMoveListener = function (event) {
        event.preventDefault();
    };
    document.addEventListener('touchmove', touchMoveListener, { passive: false });
}
export function enableElasticScroll() {
    if (touchMoveListener) {
        document.removeEventListener('touchmove', touchMoveListener);
        touchMoveListener = null;
    }
}

//var myButton = document.getElementById("soundButton");

//myButton.addEventListener("mouseup", function (event) {
//    // Do something when the button is released
//    console.log("Button released!");
//});
