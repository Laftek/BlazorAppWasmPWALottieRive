window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
        displayMode = 'standalone';
        DotNet.invokeMethodAsync('BlazorAppWasmPWALottieRive', 'ShowHomeScreenRecommendation', true);
            }
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);
    console.log('DISPLAY_MODE_MATCH:', window.matchMedia('(display-mode: standalone)').matches ? 'standalone' : 'browser tab');
});

