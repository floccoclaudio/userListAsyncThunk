import {combineReducers} from '@reduxjs/toolkit'
import userListReducer from '../features/userListSlice'

const rootReducers = combineReducers({
    reducer:{
        users: userListReducer
    }}
)

export default rootReducers