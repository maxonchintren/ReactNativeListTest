import { _getEvents } from '../../../api/http/events'
import {
  makeRequest
} from '../../utils/redux-utils'
import { SET_EVENTS } from './constants'

export const getEvents = (data, callbackSuccess, callbackError, paging) =>
  makeRequest(
    SET_EVENTS,
    _getEvents,
    data,
    callbackSuccess,
    callbackError,
    paging
  )