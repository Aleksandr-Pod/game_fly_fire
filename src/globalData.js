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
        positionX: 500,
        directionDegree: -20,
    },
    asteroid: {
        flyId: null,
        positionX: 300,
        rotationDegree: 200,
    }
    // fieldRef: document.querySelector('.field')
}