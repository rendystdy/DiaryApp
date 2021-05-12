import {
  GET_LIST_NOTES,
  GET_LIST_NOTES_FAILED,
  GET_LIST_NOTES_SUCCESS,
  ADD_LIST_NOTE,
  ADD_LIST_NOTE_FAILED,
  ADD_LIST_NOTE_SUCCESS,
  UPDATE_LIST_NOTE,
  UPDATE_LIST_NOTE_FAILED,
  UPDATE_LIST_NOTE_SUCCESS
} from '../../Actions'

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  actionStatus: '',
  data: [],
}

const Notes = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_NOTES:
      return {
        ...state,
        actionStatus: GET_LIST_NOTES,
        loading: true,
        error: false,
      }
    case GET_LIST_NOTES_SUCCESS:
      return {
        ...state,
        actionStatus: GET_LIST_NOTES_SUCCESS,
        loading: false,
        error: false,
        data: action.payload
      }
    case GET_LIST_NOTES_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: GET_LIST_NOTES_FAILED,
        errorMessage: action.msg,
        error: true,
      }
    case ADD_LIST_NOTE:
      return {
        ...state,
        actionStatus: ADD_LIST_NOTE,
        loading: true,
        error: false,
      }
    case ADD_LIST_NOTE_SUCCESS:
      return {
        ...state,
        actionStatus: ADD_LIST_NOTE_SUCCESS,
        loading: false,
        error: false,
        data: action.payload
      }
    case ADD_LIST_NOTE_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: ADD_LIST_NOTE_FAILED,
        errorMessage: action.msg,
        error: true,
      }
    case UPDATE_LIST_NOTE:
      return {
        ...state,
        actionStatus: UPDATE_LIST_NOTE,
        loading: true,
        error: false,
      }
    case UPDATE_LIST_NOTE_SUCCESS:
      return {
        ...state,
        actionStatus: UPDATE_LIST_NOTE_SUCCESS,
        loading: false,
        error: false,
        data: action.payload
      }
    case UPDATE_LIST_NOTE_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: UPDATE_LIST_NOTE_FAILED,
        errorMessage: action.msg,
        error: true,
      }
    default:
      return { ...state }
  }
}

export { Notes }
