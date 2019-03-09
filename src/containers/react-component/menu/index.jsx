import React, { Component } from 'react';
import { HashRouter as Router, HashRouter, Route,Switch,Link,NavLink,Redirect} from 'react-router-dom';
import css from './index.scss';

// 加载视图组件
import View from "../view/view.jsx";
import * as types from './all.js';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="nav">
                {
                    Object.keys(types).map((item , key) =>  
                        <NavLink to={{ pathname: `/react/${item}` ,search:`?name=${item}`}} activeClassName="active" replace key={key}> {item}</NavLink>
                    )
                }
                </div>
                <div className="view-content">
                    <div className="intro">
                        介绍：减少组件重复封装和开发。
                    </div>
                    {/* 一个动态路由容器 */}
                    <Route path="/(react/:path)?"  render={props => <View {...props} />}  />
                </div>
            </React.Fragment>
        )
    }
}


