import {
  GET_LIST_NOTES,
  GET_LIST_NOTES_FAILED,
  GET_LIST_NOTES_SUCCESS,
  ADD_LIST_NOTE,
  ADD_LIST_NOTE_FAILED,
  ADD_LIST_NOTE_SUCCESS,
  UPDATE_LIST_NOTE,
  UPDATE_LIST_NOTE_FAILED,
  UPDATE_LIST_NOTE_SUCCESS,
} from './'
import { navigate } from '../../Navigators/Root'

const dummyData = [
  {
    id: '1',
    title:
      'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet',
    desc: 'desc 1',
    date: new Date('October 15, 2021'),
  },
  {
    id: '2',
    title: 'consectetur adipiscing elit',
    desc: 'desc 2',
    date: new Date('December 13, 2021'),
  },
  {
    id: '3',
    title: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    desc: 'desc 3',
    date: new Date('January 21, 2021'),
  },
  {
    id: '4',
    title: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    desc: 'desc 4',
    date: new Date('Februari 01, 2021'),
  },
]

const getListNotes = () => async dispatch => {
  const sortedByDate = dummyData.sort((a, b) => b.date - a.date)
  dispatch({ type: GET_LIST_NOTES })

  try {
    setTimeout(() => {
      dispatch({ type: GET_LIST_NOTES_SUCCESS, payload: sortedByDate })
    }, 2000)
  } catch (error) {
    dispatch({ type: GET_LIST_NOTES_FAILED, msg: 'somthing wrong !!!' })
  }
}

const addListNote = payload => async (dispatch, getState) => {
  const { id, title, desc } = payload

  const newData = getState().notes.data

  newData.push({ id, title, desc })

  const sortedByDate = newData.sort((a, b) => b.date - a.date)

  dispatch({ type: ADD_LIST_NOTE })

  try {
    setTimeout(() => {
      dispatch({ type: ADD_LIST_NOTE_SUCCESS, payload: newData })
    }, 2000)
  } catch (error) {
    dispatch({ type: ADD_LIST_NOTE_FAILED, msg: 'somthing wrong !!!' })
  }
}

const updateListNote = payload => (dispatch, getState) => {
  dispatch({ type: UPDATE_LIST_NOTE })

  const { id, title, desc } = payload
  const oldData = getState().notes.data
  const elementIndex = oldData.findIndex(el => el.id === id)

  const newArray = [...oldData]

  newArray[elementIndex] = { ...newArray[elementIndex], title, desc }

  const sortedByDate = newArray.sort((a, b) => b.date - a.date)

  try {
    setTimeout(() => {
      navigate('HomePage')
      dispatch({ type: ADD_LIST_NOTE_SUCCESS, payload: sortedByDate })
    }, 2000)
  } catch (error) {
    dispatch({ type: ADD_LIST_NOTE_FAILED, msg: 'Somethin wrong !!!' })
  }
}

export { getListNotes, addListNote, updateListNote }
