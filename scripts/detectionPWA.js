export function checkDisplayMode() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Standalone mode');
        return 'standalone';
    } else if (window.matchMedia('(display-mode: minimal-ui)').matches) {
        console.log('Minimal UI mode');
        return 'minimal-ui';
    } else if (window.matchMedia('(display-mode: fullscreen)').matches) {
        console.log('Fullscreen mode');
        return 'fullscreen';
    } else if (window.matchMedia('(display-mode: browser)').matches) {
        console.log('Browser mode');
        return 'browser';
    } else if (window.matchMedia('(display-mode: browser tab)').matches) {
        console.log('Browser tab mode');
        return 'browser tab';
    } else {
        console.log('Unknown mode');
        return 'unknown';
    }
}
