import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Searchbar from './components/SearchBar'
import ContactList from './components/ContactList'

import Spinner from './components/Spinner'

import { getContacts } from './utils'

const App = () => {

  const [users, setUsers] = useState([])
  const [checkedIDs, setCheckedIDs] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    getContacts()
    .then(res => {
      setUsers(res.data.slice(0, 20))
      // console.log(res.data)
    })
    .catch(error => {
      console.log(error.message)
    })
    if(checkedIDs.length){
      checkedIDs.map(item => console.log(item))
    }
  }, [checkedIDs])

  

  const handleCheck =  id => {
    let inTheState = [...checkedIDs]
    let justChecked = parseInt(id)
    let foundInState = inTheState.indexOf(justChecked)

    if(foundInState === -1){
        inTheState.push(justChecked)
    }else{
        //if found pull out from the array
        inTheState.splice(foundInState, 1)
    }
    setCheckedIDs(inTheState)
    
} 

const handleSearch = e => {
  setKeyword(e.target.value)

  const updatedUsers = users.filter(user => {
    return user.first_name.toLowerCase().includes(e.target.value) || user.last_name.toLowerCase().includes(e.target.value)
  })

  setFilteredUsers(updatedUsers)
  
}





  if(!users.length){
    return <Spinner/>
  }

  return (
    <div className="container">
      <Header title="Contacts" />
      <Searchbar
      handleSearch={handleSearch}
      keyword={keyword}
      />
      <ContactList 
      handleCheck={handleCheck}
      checkedIDs={checkedIDs} setCheckedIDs={setCheckedIDs} users={keyword ? filteredUsers : users}/>
    </div>
  );
}

export default App;
