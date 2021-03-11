// import myStore from './store';
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios'
export default function Signup(props) {
    let { register, errors } = useForm();
    let [user, setUsers] = useState({});
    async function onSubmit(evt) {
        evt.preventDefault();
        let form = new FormData();
        for (let key in user) {
            
            if (key === "files") {
                for (let files of user[key]) {
                    form.append(key, files);
                }
            } else {
                form.append(key, user[key]);
            }

        }
        // myStore.dispatch({type: 'SignUp_data', user: ref.data})
        let ref = await axios.post('/signup', form);
        console.log(ref.data);
        props.history.push('/datab');
        
    }
    function data(evt){
        setUsers({
            ...user,
            [evt.target.name]: evt.target.value
        })
    }
    function onFileSelect(evt) {
                
        let files = [];
        for (let file of evt.target.files) {  
            
            files.push(file);
        }
        
        setUsers({
            ...user,
            files : files
        })
    }


    return <form onSubmit={onSubmit}>     
         <div>
            <input onChange = {data} name='name' placeholder='Name' ref={register({ required: true })} />
            {errors.name && <span>Please Enter Your Name</span>}
        </div>
        <div>
            <input onChange = {data} name='email' placeholder='Email' ref={register({ required: true, pattern: /@gmail.com/ })} />
            {errors.email && <span>Please Enter Your Email</span>}
        </div>
        <div>
            <input onChange = {data} name='pass' placeholder='Password' ref={register({ required: true, minLength: 4, maxLength: 6 })} />
            {errors.pass && <span>Please Enter Your Password</span>}
        </div>
        <div>
        <input multiple type = "file" onChange = {onFileSelect} name = "files" />
        </div>
        <input type='submit' />
    </form>
}