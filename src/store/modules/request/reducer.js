import {
  LOADING_START,
  LOADING_END,
  REQUEST_ERROR,
  RESET_ERRORS
} from './constants'

const initialState = {
  isLoading: false,
  isError: false,
  error: {
    status: '',
    description: ''
  }
}

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
        error: {
          status: '',
          description: ''
        }
      }

    case RESET_ERRORS:
      return {
        ...state,
        ...initialState
      }

    case LOADING_END:
      return {
        ...state,
        isLoading: false
      }

    case REQUEST_ERROR:
      return {
        isLoading: false,
        isError: true,
        error: {
          status: action.error.status,
          description: action.error.description
        }
      }

    default:
      return state
  }
}
