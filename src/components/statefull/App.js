import React from 'react';
import Layout from '../stateless/Layout/Layout';
import Login from '../statefull/Login/Login';
import Aux from '../../hoc/Auxi';

class App extends React.Component{
    state={
        loggedIn : false
    }
    uiChangeHandler = () => {
        this.setState({
            loggedIn : !this.state.loggedIn
        });

        sessionStorage.setItem('isLoggedIn', true);
    }
    render(){
        let comp = <Login onclick={this.uiChangeHandler}/>;
        if(sessionStorage.getItem('isLoggedIn')){
            comp = <Layout />
        }
        return(
            <Aux>
                {comp}
            </Aux>
        );
    }
}

export default App;