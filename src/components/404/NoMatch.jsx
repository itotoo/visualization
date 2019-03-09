import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';
import './404.scss';
export default class NoMatch extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="g-main">
                    <div className="g-content">
                        <div className="content">
                            404 ...
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


