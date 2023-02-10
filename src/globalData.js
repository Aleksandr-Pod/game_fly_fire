export const globalData = {
    started: false,
    position: {
        top: 400,
        left: 200
    },
    moveIntervalId: {
        left: null,
        right: null,
        up: null,
        down: null
    },

    meteor: {
        flyId: null,
        timer: null,
        positionX: 500,
        posY: null,
        speed: null,
        directionDegree: -20,
    },
    asteroid: {
        flyId: null,
        timer: null,
        positionX: 300,
        posY: null,
        speed: null,
        rotationDegree: 200,
    }
    // fieldRef: document.querySelector('.field')
}