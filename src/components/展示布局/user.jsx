import React, { Component } from 'react';
import style from './style.scss';

export default class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="user-message">
                    <div className="auth">
                        作者：{this.props.auth}
                    </div>
                    <div className="compatibility">
                        兼容性：{this.props.compatibility}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


