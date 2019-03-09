import React, { Component } from 'react';
import axios from 'axios';
import './view.scss';

import  * as pc  from '../../../view/global/pc/all.js';
import  * as h5  from '../../../view/global/mobile/all.js';

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
        let name = new URLSearchParams(this.props.location.search).get("name") || 'pc_范例';
        if( name !== this.state.name ){
            this.getData(name);
        }
    }
    // 渲染后调用
    componentDidMount() {
        let _name = this.state.name;
        if(!_name){
            _name = 'pc_范例'
        }
        this.getData = (name) =>{
            if(name && name.indexOf('pc') !== -1){
                this.setState({
                    name: name,
                    Component:pc[name]
                });
            }else{
                this.setState({
                    name: name,
                    Component:h5[name]
                });
            }
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




