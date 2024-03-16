import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <li className="li-cont">
      {children}
      <GrFormClose className="close-icon" />
    </li>
  )
}

export default Notification
