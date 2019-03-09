import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route,Switch,Link } from 'react-router-dom';
import "antd/dist/antd.css";
import './header.scss';

export default class header extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Hello world!'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return (
            <div className="g-header">
                <div className="title">
                    前端可视化平台
                </div>
                <div className="menu">
                    <ul>
                        <li> <Link to="/react" replace>react组件</Link> </li>
                        <li> <Link to="/animation" replace>动效</Link> </li>
                        <li> <Link to="/global" replace>全局</Link> </li>
                    </ul>
                </div>
            </div>
        )
    }
}