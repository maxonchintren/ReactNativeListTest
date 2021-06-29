import {
  LOADING_START,
  LOADING_END,
  RESET_ERRORS,
  REQUEST_ERROR
} from './constants'

export const startLoading = () => ({
  type: LOADING_START
})

export const finishLoading = () => ({
  type: LOADING_END
})

export const resetErrors = () => ({
  type: RESET_ERRORS
})

export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error
})
