window.addEventListener('DOMContentLoaded', () => {
    let displayMode = 'browser tab';
    if (window.matchMedia('(display-mode: standalone)').matches) {
        displayMode = 'standalone';
        console.log('Before method call');
        DotNet.invokeMethodAsync('BlazorAppWasmPWALottieRive', 'ShowHomeScreenRecommendation', true);
        console.log('After method call');

    }
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', displayMode);
    console.log('DISPLAY_MODE_MATCH:', window.matchMedia('(display-mode: standalone)').matches ? 'standalone' : 'browser tab');
    DotNet.invokeMethodAsync('BlazorAppWasmPWALottieRive', 'ShowHomeScreenRecommendation', true);
});

