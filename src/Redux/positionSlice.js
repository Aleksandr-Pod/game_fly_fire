import { createSlice } from '@reduxjs/toolkit';

export const positionSlice = createSlice({
    name: 'position',
    initialState: { top: 400, left: 200, fire: false },
    reducers: {
        setX(state, { payload }) { state.left = state.left + payload },
        setY(state, { payload }) { state.top = state.top + payload},
        setFire(state, { payload }){state.fire = payload}
    }
})

// export const percentSlice = createSlice({
//     name: 'percent',
//     initialState: new Array(data.length),
//     reducers: {
//         setPercent(state, { payload }) {state[payload.idx] = payload.calcPercent}
//     }
// })
export const { setX, setY, setFire } = positionSlice.actions;
// export const { setPercent } = percentSlice.actions;
