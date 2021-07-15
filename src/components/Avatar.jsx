import {Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const Avatar = () => {
  const {user} = useSelector(state => state)

  return (
    <Row className='sideBar__avatar_container'>
      <div className='sideBar__img_container'>
        <img src={user.avatar} alt="avatar" />
      </div>
      <h2>{user.name}</h2>
    </Row>
  )
}

export default Avatar