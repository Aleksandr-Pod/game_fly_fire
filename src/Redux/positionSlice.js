import { createSlice } from '@reduxjs/toolkit';

export const positionSlice = createSlice({
  name: 'position',
  initialState: { top: 400, left: 200, fire: false },
  reducers: {
    // setX(state, { payload }) { state.left = state.left + payload }
    setX(state, { payload }) { 
      if (state.left + payload > 950 || state.left + payload < 0) return;
      state.left = state.left + payload
    },
    // setY(state, { payload }) { state.top = state.top + payload},
    setY(state, { payload }) { 
      if (state.top + payload > 550 || state.top + payload < 200) return;
      state.top = state.top + payload
    },
    setFire(state, { payload }) { state.fire = payload }
  }
})

export const meteorSlice = createSlice({
  name: 'meteor',
  initialState: {flyId: null, timer: null, pos_X: 500, pos_Y: null, directionDegree: -20},
  reducers: {
    setFlyId(state, { payload }) {state.flyId = payload},
    setTimer(state, { payload }) {state.timer = payload},
    setPositionX(state, {payload}){state.pos_X = payload},
    setPositionY(state, {payload}){state.pos_Y = payload},
    setDirectionDegree(state, {payload}){state.directionDegree = payload},
  }
})
export const { setX, setY, setFire } = positionSlice.actions;
export const { setFlyId, setTimer, setPositionX, setPositionY, setDirectionDegree } = meteorSlice.actions;
