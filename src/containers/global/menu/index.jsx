import React, { Component } from 'react';
import { HashRouter as Router, HashRouter, Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';

import css from './index.scss';

// 加载视图组件
import View from "../view/view.jsx";
import  * as pc  from '../../../view/global/pc/all.js';
import  * as h5  from '../../../view/global/mobile/all.js';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: new URLSearchParams(props.location.search).get("name"),
            Component: null
        };
    }
    render(){
        return (
            <React.Fragment>
                <div className="nav">
                <h3>客户端</h3>
                {
                    Object.keys(pc).map((item , key) =>  
                        <NavLink to={{ pathname: `/global/${item}` ,search:`?name=${item}`}} activeClassName="active" replace key={key}> {item}</NavLink>
                    )
                }
                <h3>移动端</h3>
                {
                    Object.keys(h5).map((item , key) =>  
                        <NavLink to={{ pathname: `/global/${item}` ,search:`?name=${item}`}} activeClassName="active" replace key={key}> {item}</NavLink>
                    )
                }
                </div>
                <div className="view-content">
                    <div className="intro">
                        介绍：可持续集成全局文件。
                    </div>
                    {/* 一个动态路由容器 */}
                    <Route path="/global(/:path)?"  render={props => <View {...props} />}  />
                </div>
            </React.Fragment>
        )
    }
}


