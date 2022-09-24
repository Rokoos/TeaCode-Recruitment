import React, {useState} from 'react'
import userAvatart from '../images/avatar.png'

const SingleContact = ({user,handleCheck, checkedIDs }) => {
  const {avatar, first_name, last_name, id} = user
  
  const [check, setCheck] = useState(false)
  
  return (
      <div onClick={() => handleCheck(id)}
      className='bg-light mb-2 d-flex justify-content-between align-items-center'
      style={{cursor:'pointer'}}>
      <img 
      style={{borderRadius: '50%', border: '1px solid #000'}}
      className="ml-2"
      height='50px'
      width='50px'
      
      src={avatar ? avatar : userAvatart } 
      alt={last_name}/>
      <span className='font-italic'>{`${first_name} ${last_name}`}</span>
      <input
      checked={checkedIDs.includes(id)}
      onChange={() => setCheck(!check)}
      value={check}
      type="checkbox" className='mr-2' />
      </div>
  )
}

export default SingleContact
