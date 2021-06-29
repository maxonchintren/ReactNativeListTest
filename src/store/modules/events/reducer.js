import { createReducer } from '@reduxjs/toolkit'
import { SUCCESS, FAILURE, REQUEST } from '../../constants/statuses'
import { SET_EVENTS } from './constants'

const initialState = {
  events: [],
  isLoadingEvents: false,
  paging: {
    page: 0,
    count: 25
  },
  isAllLoaded: false
}

export const eventsReducer = createReducer(initialState, {
  [SET_EVENTS[REQUEST]]: (state) => {
    state.isLoadingEvents = true
  },

  [SET_EVENTS[SUCCESS]]: (state, action) => {
    if (!action.payload.data.length) {
      state.isAllLoaded = true
      state.isLoadingEvents = false
      return
    }
    state.events = action.payload.paging.page === 1 ?
      action.payload.data :
      [...state.events, ...action.payload.data]
    state.paging = { ...action.payload.paging }
    state.isLoadingEvents = false
  },

  [SET_EVENTS[FAILURE]]: (state) => {
    state.events = []
    state.isLoadingEvents = false
  }
})
