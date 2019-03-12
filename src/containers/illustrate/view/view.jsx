import React, { Component } from 'react';
import axios from 'axios';
import './view.scss';

import * as types from '../menu/all.js';

export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: new URLSearchParams(props.location.search).get("name"),
            Component: null
        };
    }
    // 组件更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        let name = new URLSearchParams(this.props.location.search).get("name") || '使用说明';
        if( name !== this.state.name ){
            this.getData(name);
        }
    }
    // 渲染后调用
    componentDidMount() {
        let _name = this.state.name;
        // 默认为空
        if(!_name){
            _name = '使用说明'
        }
        this.getData = (name) =>{
            this.setState({
                name: name,
                Component:types[name]
            });
        }
        this.getData(_name);
    }
    render(){
        const {Component} = this.state;
        return (
            <React.Fragment>
                <div className="view-box">
                    {(Component) ? <Component {...this.props} /> : null}
                </div>
            </React.Fragment>
        )
    };
};




