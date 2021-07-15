import {useSelector} from 'react-redux'
import NotesItem from './NotesItem'
import NotesItemSelect from './NotesItemSelect'
import NoteCreateForm from './NoteCreateForm'

const NotesList = () => {
  const {notes, selectNoteId, selectedGroup, showCeateNoteForm} = useSelector(state => state)

  return (
    <div className='notesList__container'>
      {
        showCeateNoteForm ? <NoteCreateForm /> : !selectNoteId ? notes.filter(item => selectedGroup !== 'All' && selectedGroup === item.group ? item : selectedGroup === 'All' ? item :  false ).map(note => <NotesItem data={note}/>) : <NotesItemSelect />
      }

    </div>
  )
}

export default NotesList