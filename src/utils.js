import axios from 'axios'

export const getContacts = async () => await axios.get('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')

export const sortUsers = users => {
 return users.sort((a,b) => {
  if(a.last_name.toLowerCase() < b.last_name.toLowerCase()){
    return -1
  }else if(a.last_name.toLowerCase() > b.last_name.toLowerCase()){
    return 1
  }else {
    return 0
  }
  
})
}
