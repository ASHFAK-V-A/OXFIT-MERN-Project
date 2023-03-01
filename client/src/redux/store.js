import {configureStore} from '@reduxjs/toolkit'
import  authSlice  from './Token/auth'

export default configureStore({
    reducer:{
        token:authSlice
    }
})