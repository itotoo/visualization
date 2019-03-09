import React, { Component } from 'react';
import axios from 'axios';

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
        let name = new URLSearchParams(this.props.location.search).get("name") || '范例';
        if( name !== this.state.name ){
            this.getData(name);
        }
    }
    // 在组件接收到一个新的 prop (更新后)时被调用
    // componentWillReceiveProps(props) {
    //     this.getData(new URLSearchParams(props.location.search).get("name"));
    // }
    // 渲染后调用
    componentDidMount() {
        let _name = this.state.name;
        if(!_name){
            _name = '范例'
        }
        this.getData = (name) =>{
            this.setState({
                name: name,
                Component:types[name]}); //把组件B存起来
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




