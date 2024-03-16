import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-cont">
    <h1 className="main-h1">Alert Notifications</h1>
    <ul className="ul-cont">
      <Notification>
        <AiFillCheckCircle className="success notifi-icon" />
        <div className="desc-cont">
          <h1 className="success noti-h1">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="error notifi-icon" />
        <div className="desc-cont">
          <h1 className="error noti-h1">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="warning notifi-icon" />
        <div className="desc-cont">
          <h1 className="warning noti-h1">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="info notifi-icon" />
        <div className="desc-cont">
          <h1 className="info noti-h1">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </ul>
  </div>
)

export default AlertNotifications
