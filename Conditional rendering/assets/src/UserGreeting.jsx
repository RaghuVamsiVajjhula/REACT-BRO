import PropTypes, { bool } from 'prop-types';

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2  className="welcome" >Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2 className="login" >Please login to continue</h2>
    // }

    const WelcomeMessage= <h2 className="welcome">Welcome {props.username}</h2>

    const   loginPrompt= <h2 className="login">Please login to continue</h2>

    return(props.isLoggedIn? WelcomeMessage : loginPrompt)


}

UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username: "Guest",
}

export default UserGreeting