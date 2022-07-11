import React, {useState} from 'react'
import Form from './Form'
import List from './List'
import { CrudContextProvider } from './Store/CrudContext'

const ContextCrud = () => {

  return (
    <>
    <CrudContextProvider>
        <Form />
        <List />
    </CrudContextProvider>
    </>
  )
}

export default ContextCrud