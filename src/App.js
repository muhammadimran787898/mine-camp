import SignupForm from './signupform'
import Loginform from './loginform'
import  Datauser  from './dbusre'
   
import { BrowserRouter, Route, Link } from 'react-router-dom';
import myStore from './store'
import { Provider } from 'react-redux'
import DashBoard from './dashboard';
export default function App() {
  return <div>
    <BrowserRouter>
      <Provider store={myStore}>
        {/* <Route path='/' /> */}
        <Route path='/signup' component={SignupForm} />
        <Route path='/login' component={Loginform} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/datab' component={Datauser} />

        <Route exact path='/' render={() => {
          return <div>
            {/* <Link to='/'><button>Main menu</button></Link> */}
            <Link to='/signup'><button>Creat Your Account</button></Link>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/dashboard'><button>DashBoard</button></Link>
            <Link to='/datab'><button>USER</button></Link>
            

          </div>
        }} />
      </Provider>
    </BrowserRouter>

  </div>





}
