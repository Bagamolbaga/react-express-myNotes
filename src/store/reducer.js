import {
  CREATE_NOTE,
  CREATE_GROUP,
  SHOW_ALL_NOTES,
  SHOW_CREATE_NOTE_FORM,
  SELECT_ACTIVE_GROUP,
  SHOW_ACTIVE_GROUP,
  SELECT_NOTE,
  EDIT_SELECT_NOTE,
  SHOW_EDIT_NOTE_FORM
} from './actions'



const initialState = {
  selectNoteId: false,
  selectedGroup: 'All',
  showCeateNoteForm: false,
  showEditNoteForm: false,
  user: {
    name: 'Baga',
    avatar: 'https://c4.wallpaperflare.com/wallpaper/40/881/286/hoodie-anime-girl-wallpaper-preview.jpg',
    isLogin: true
  },
  groups: [{id: 1, title: 'Anime'}, {id: 2, title: 'Game'}],
  notes: [
    {id: 1, group: 'Anime', title: 'Test', text: '## baga #test'},
    {id: 2, group: 'Anime', title: 'Test 2', text: `## baga > sf`},
    {id: 3, group: 'Game', title: 'Test 2', text: `## baga > sf`}
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      let newNotes = [...state.notes]
      let newNote = {
        id: +state.notes.length + 1,
        group: state.selectedGroup,
        title: action.payload.title,
        text: action.payload.text
      }
      return {
        ...state,
        showCeateNoteForm: false,
        notes: [...newNotes, newNote]
      }

    case CREATE_GROUP:
      let newGroups = [...state.groups]
      let newGroup = {
        id: +state.groups.length + 1,
        title: action.payload
      }
      return {
        ...state,
        groups: [...newGroups, newGroup]
      }

    case SHOW_ALL_NOTES:
      return {
        ...state,
        selectNoteId: false,
        selectedGroup: 'All',
        showCeateNoteForm: false
      }

    case SHOW_CREATE_NOTE_FORM:
      return {
        ...state,
        showCeateNoteForm: true,
        selectedGroup: 'All'
      }

    case SELECT_ACTIVE_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
        selectNoteId: false
      }

    case SHOW_ACTIVE_GROUP:
      return {
        ...state,
        selectNoteId: false
      }

    case SHOW_EDIT_NOTE_FORM:
      return {
        ...state,
        showEditNoteForm: true
      }

    case SELECT_NOTE:
      return {
        ...state,
        selectNoteId: action.payload
      }

     case EDIT_SELECT_NOTE:
      let notes = [...state.notes]
      notes.map(note => {
        if(note.id === state.selectNoteId) {
          note.title = action.payload.title
          note.text = action.payload.text
        }
        return note
      })
      return {
        ...state,
        notes: [...notes],
        showEditNoteForm: false
      }
  
    default:
      return state
  }
}