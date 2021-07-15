export const CREATE_NOTE = 'CREATE_NOTE'
export const CREATE_GROUP = 'CREATE_GROUP'
export const SHOW_ALL_NOTES = 'SHOW_ALL_NOTES'
export const SHOW_CREATE_NOTE_FORM = 'SHOW_CREATE_NOTE_FORM'
export const SELECT_ACTIVE_GROUP = 'SELECT_ACTIVE_GROUP'
export const SHOW_ACTIVE_GROUP = 'SHOW_ACTIVE_GROUP'
export const SELECT_NOTE = 'SELECT_NOTE'
export const EDIT_SELECT_NOTE = 'EDIT_SELECT_NOTE'
export const SHOW_EDIT_NOTE_FORM = 'SHOW_EDIT_NOTE_FORM'







export const createNote = (value) => {
  return {
    type: CREATE_NOTE,
    payload: value
  }
}

export const createGroup = (value) => {
  return {
    type: CREATE_GROUP,
    payload: value
  }
}

export const showAllNote = () => {
  return {
    type: SHOW_ALL_NOTES
  }
}

export const showCreateNoteForm = () => {
  return {
    type: SHOW_CREATE_NOTE_FORM
  }
}

export const showEditForm = () => {
  return {
    type: SHOW_EDIT_NOTE_FORM
  }
}

export const selectActiveGroup = (value) => {
  return {
    type: SELECT_ACTIVE_GROUP,
    payload: value
  }
}

export const showActiveGroup = (value) => {
  return {
    type: SHOW_ACTIVE_GROUP,
    payload: value
  }
}

export const selectNote = (id) => {
  return {
    type: SELECT_NOTE,
    payload: id
  }
}

export const editNote = (value) => {
  return {
    type: EDIT_SELECT_NOTE,
    payload: value
  }
}