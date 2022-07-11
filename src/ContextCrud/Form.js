import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Container from '../UI/Container'
import Input from '../UI/Input'
import CrudContext from './Store/CrudContext'

const Form = () => {

    const userName = useRef()
    const userCity = useRef()
    const userMail = useRef()

   const {allUsers, updateUser} = useContext(CrudContext)
   const [users, setUsers] = allUsers;
   const [selectedUser, setSelectedUser] = updateUser;

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const newUser = {
            name : userName.current.value,
            city : userCity.current.value,
            email : userMail.current.value
        }

        if(selectedUser!=null){
            users.splice(selectedUser.id, 1, newUser)
            setUsers( preData => [...preData])
            setSelectedUser(null)
        }else{
            setUsers( preData => {
                return [ ...preData, newUser ]
            })
        }
        
        userName.current.value = '';
        userCity.current.value = '';
        userMail.current.value = '';
    }

    const updateUserFun = () => {
        console.log('im called')
        userName.current.value = selectedUser.name;
        userCity.current.value = selectedUser.city;
        userMail.current.value = selectedUser.email;

    }

    useEffect( () => {
        if(selectedUser!=null){
            updateUserFun()
        }
    }, [selectedUser])

  return (
    <Container>
        <Card>
            <form onSubmit={onSubmitHandler}>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Name',
                    label : 'User Name',
                    ref : userName
                }}/>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter City',
                    label : 'User City',
                    ref : userCity
                }}/>
                <Input input={{
                    type : 'text',
                    className : 'form-control',
                    placeholder : 'Enter Mail',
                    label : 'User Email',
                    ref : userMail
                }}/>
                <Button button={{
                    type : 'submit',
                    className : 'btn btn-primary',
                    value : 'Submit'
                }}
                    />
            </form>
        </Card>
    </Container>
  )
}

export default Form