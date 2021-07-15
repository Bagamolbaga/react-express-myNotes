import MarkdownPreview from '@uiw/react-markdown-preview'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import NoteCreateForm from './NoteCreateForm'

const NotesItemSelect = () => {
  const [isEdit, setIsEdit] = useState(false)
  const {selectNoteId, notes} = useSelector(state => state)
  const node = notes.filter(note => note.id === selectNoteId)[0]
  return (
    
      !isEdit ? (
        <div className='notesItemSelect__container'>
          <div className='notesItemSelect__container-title-container'>
            <h2 className='notesItemSelect__container-title'>{node.title}</h2>
            <button
              className="notesItemSelect__container-title_btn-edit"
              onClick={() => setIsEdit(true)}
              >
                Edit
            </button>
          </div>
          <div className="notesItemSelect__container-md-container">
            <MarkdownPreview source={node.text} />
          </div>
        </div>
      ) 
      :
        <NoteCreateForm />
    
  )
}

export default NotesItemSelect