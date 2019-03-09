import React, { Component } from 'react';
import style from './demo.scss';
export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="loading">
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="progress">85%</div>
                </div>
            </React.Fragment>
        )
    }
}


