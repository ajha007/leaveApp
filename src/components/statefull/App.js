import React from 'react';
import Layout from '../stateless/Layout/Layout';
import Login from '../statefull/Login/Login';
import Aux from '../../hoc/Auxi';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component{
    state={
        loggedIn : false,
        profile : null
    }
    uiChangeHandler = (obj) => {
        console.log(obj);
        this.setState({
            profile : obj,
            loggedIn : !this.state.loggedIn
        });

        sessionStorage.setItem('isLoggedIn', true);
    }
    componentDidUpdate(){
      console.log("App.js: component did update");
    }
    componentWillUpdate(){
      console.log("App.js: component will update");
    }
    render(){
      console.log( this.state.profile);
        let comp = <Login onclick={this.uiChangeHandler}/>;
        if(sessionStorage.getItem('isLoggedIn')){
            comp = <Layout profileApp={this.state.profile}/>
        }
        return(
            <BrowserRouter>
                <Aux>
                    {comp}
                </Aux>
            </BrowserRouter>
        );
    }
}

export default App;
