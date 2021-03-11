
import { useForm } from 'react-hook-form'
import myStore from './store'
import axios from 'axios'
export default function Login(props) {
    let {register, handleSubmit, errors} = useForm();
    async function onSubmit(data) { 
        let res = await axios.post('/login', data);
        myStore.dispatch({type: 'LOGIN_USER', user: res.data})
        props.history.push('/dashboard')
        // myStore.dispatch({type: 'LOGIN_USER', user: res.data});
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input name='email' placeholder='Email' ref={register({ required: true, pattern: /@gmail.com/ })} />
            {errors.email && <span>Incorrect Email Please Try Again</span>}
        </div>
        <div>
            <input name='pass' placeholder='Password' ref={register({ required: true, minLength: 4, maxLength: 6 })} />
            {errors.pass && <span>Incorrect Email Please Try Again</span>}
        </div>
        <input type='submit' />
    </form>
}