import { combineReducers } from 'redux'
import { eventsReducer as events } from './events/reducer'

export default combineReducers({
  events
})
