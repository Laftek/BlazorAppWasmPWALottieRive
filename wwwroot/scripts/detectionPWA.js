export function checkDisplayMode() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Standalone mode');
        return true;
    } else if (window.matchMedia('(display-mode: minimal-ui)').matches) {
        console.log('Minimal UI mode');
        return false;
    } else if (window.matchMedia('(display-mode: fullscreen)').matches) {
        console.log('Fullscreen mode');
        return false;
    } else if (window.matchMedia('(display-mode: browser)').matches) {
        console.log('Browser mode');
        return false;
            } else if (window.matchMedia('(display-mode: browser tab)').matches) {
        console.log('Browser tab mode');
        return false;
    } else {
        console.log('Unknown mode');
        return false;
    }
}
export function isNotDesktop() {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('Mobile device detected:', isMobileDevice);
    return isMobileDevice;
}
if (isNotDesktop()) {
    console.log('Running code for mobile devices');
    // Code for mobile devices
} else {
    console.log('Running code for desktop devices');
    // Code for desktop devices
}
