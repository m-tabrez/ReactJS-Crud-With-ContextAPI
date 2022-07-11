import React from 'react'
import { useContext } from 'react'
import Container from '../UI/Container'
import CrudContext from './Store/CrudContext'
import Button from '../UI/Button'

const List = () => {

const {allUsers, updateUser} = useContext(CrudContext)
const [users, setUsers] = allUsers;
const [selectedUser, setSelectedUser] = updateUser;

const onDeleteHandler = (delId) => {
    users.splice(delId, 1)
    setUsers( preData => [...preData])
}

const updateFormHandler = (updInd) => {
    console.log(selectedUser)
    console.log('updateFormHandler', updInd)
    setSelectedUser({
        id : updInd,
        ...users[updInd]
    })
}


  return (
    <Container>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map( (curEle, ind )=> {
                        return(
                            <tr key={ind}>
                                <td>{curEle.name}</td>
                                <td>{curEle.city}</td>
                                <td>{curEle.email}</td>
                                <td>
                                    <div className='d-flex'>
                                        <Button button={{
                                            type : 'button',
                                            className : 'btn btn-sm btn-warning',
                                            value : 'update',
                                            onClick : () => updateFormHandler(ind)
                                        }}></Button> &nbsp;
                                        <Button button={{
                                            type : 'button',
                                            className : 'btn btn-sm btn-danger',
                                            value : 'delete',
                                            onClick : () => onDeleteHandler(ind)
                                        }}></Button>
                                    </div>
                                </td>
                            </tr>
                          
                        )
                    })
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </Container>
  )
}

export default List