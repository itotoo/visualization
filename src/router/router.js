

import { default as React, Component } from 'react';
import { HashRouter as Router, HashRouter, Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';

import baseRouter from './base.js';

// ....
import Header from '../components/header/header.jsx';
import NoMatch from '../components/404/NoMatch.jsx';

// this is the default behavior
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    console.log('路由路径变化',allowTransition)
}
export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
 
    // 创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
    render() {
        return (
            // 一级路由
            <Router getUserConfirmation={getConfirmation} >
                <React.Fragment>
                    <Header />
                    <Switch>
                        {
                            baseRouter.map( ({path, component}, key) => 
                                <Route exact path={path} component={component} key={key} />
                            )
                        }
                        <Route component={NoMatch} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}