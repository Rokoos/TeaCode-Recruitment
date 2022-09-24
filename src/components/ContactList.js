import React, {Fragment} from 'react'
import SingleContact from './SingleContact'
import { sortUsers} from '../utils'

const ContactList = ({users, checkedIDs, handleCheck}) => {

  const renderUsers = () => sortUsers(users).map(user => <SingleContact
    checkedIDs={checkedIDs}
    handleCheck={handleCheck}
    key={user.id} user={user}/>)

  return (
    <Fragment>
      {!users.length ? <span>No user found</span> :renderUsers()}
    </Fragment>
  )
}

export default ContactList