import {configureStore} from '@reduxjs/toolkit'
import  authReducer  from './Token/auth'

export default configureStore({
    reducer:{
        token:authReducer
    }
})