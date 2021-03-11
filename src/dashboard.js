

import { connect } from 'react-redux';
function DashBoard(porps){
    return <div>
        <h2>Welcome to Your Account</h2>
        <h4>Name:
             {porps.login.loginUser.name}
             </h4>
        <h4>Email:
             {porps.login.loginUser.email}
              </h4>
    </div>
}
export default connect((store)=>{
    return store;
})(DashBoard)