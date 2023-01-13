export const defaults = {
    el: document,
    wrapper: window,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: true,
    smoothTouch: false,
    initPosition: { x: 0, y: 0 },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: true,
    class: 'is-inview',
    scrollingClass: 'has-scroll-scrolling',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    scrollFromAnywhere: false,
    touchMultiplier: 3,
    resetNativeScroll: true,
    tablet: {
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'horizontal',
        breakpoint: 1024
    },
    smartphone: {
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
