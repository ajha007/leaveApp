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
    }
    render(){
        let comp = <Login onclick={this.uiChangeHandler}/>;
        if(this.state.loggedIn){
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