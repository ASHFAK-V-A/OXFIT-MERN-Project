import {configureStore} from '@reduxjs/toolkit'
import  authReducer  from './Reducers/auth'


export default configureStore({
    reducer:{
        token:authReducer
    }
})