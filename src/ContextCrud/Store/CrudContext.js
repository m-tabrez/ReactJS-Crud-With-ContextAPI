import React, {useState} from 'react'
import { createContext } from 'react'

const CrudContext = createContext()

export const CrudContextProvider = (props) => {
    const [users, setUsers] = useState([
        {name : "Mohammed TAbrez", city : 'Vellore', email : 'tab@gmail.com'},
        {name : "Mufliha ", city : 'Chennai', email : 'muf@gmail.com'},
        {name : "Tasmiya", city : 'Bengaluru', email : 'tas@gmail.com'}
    ])

    const [selectedUser, setSelectedUser] = useState(null)

  return(
    <>
        <CrudContext.Provider value={
            { 
                allUsers : [users, setUsers],
                updateUser : [selectedUser, setSelectedUser]
            }
        }>
         {props.children}
        </CrudContext.Provider>
    </>
  )
}

export default CrudContext