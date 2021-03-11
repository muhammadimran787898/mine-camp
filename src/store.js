
import { createStore, combineReducers } from 'redux'

let data = {
    users: [],
    loginUser: null
}

function login(oldData = data, newData) {
    oldData = { ...oldData };

    if (newData.type === 'SignUp_data') {
        oldData.loginUser = newData.user;
        // oldData.users.push(newData.user)
    } 
    return oldData;
}

let reducers = combineReducers({ login });
let store = createStore(reducers);

export default store;





