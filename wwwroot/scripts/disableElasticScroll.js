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
