import React, { Component } from 'react';
import style from './style.scss';

export default class Use extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="use-explain">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}


