import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  showAllNote,
  showCreateNoteForm,
  createGroup,
  selectActiveGroup,
  showActiveGroup
} from '../store/actions'
import {Button, Col} from 'react-bootstrap'
import Avatar from './Avatar'

const SideBar = () => {
  const [showAddGroupForm, setShowAddGroupForm] = useState(false)
  const [groupVal, setGroupVal] = useState('')

  const dispatch = useDispatch()
  const {groups, selectedGroup} = useSelector(state => state)

  const addNewGroup = () => {
    setShowAddGroupForm(false)
    setGroupVal('')
    dispatch(createGroup(groupVal))
  }

  return (
    <Col className='sideBar__container' md={3}>
      <Avatar />
      <Button className='sideBar__btn_notes' onClick={() => dispatch(showCreateNoteForm())}>Add Notes</Button>
      <Button className='sideBar__btn_notes sideBar__btn_notes-all' onClick={() => dispatch(showAllNote())}>My Notes</Button>
      <Button onClick={() => dispatch(showAllNote())} className={selectedGroup === 'All' ? 'sideBar__btn_group-cheked' : 'sideBar__btn_group'}>All</Button>
      {
        groups.map(g => <Button onClick={() => dispatch(selectActiveGroup(g.title))} key={g.id} className={selectedGroup === g.title ? 'sideBar__btn_group-cheked' : 'sideBar__btn_group'}>{g.title}</Button>)
      }
      {
        showAddGroupForm ? (
          <>
            <input value={groupVal} onChange={(e) => setGroupVal(e.target.value)} type="text" className='sideBar__input_add'/>
            <button onClick={addNewGroup} className='sideBar__btn_group_add'>ADD</button>
          </>
        ) : 
        <Button onClick={() => setShowAddGroupForm(true)} className='sideBar__btn_group'>Add Group</Button>
      }

    </Col>
  )
}

export default SideBar