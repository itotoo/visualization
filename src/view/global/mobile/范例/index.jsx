import React, { Component } from 'react';
// 引入通用展示布局
import Use from '../../../../components/展示布局/use.jsx';
import User from '../../../../components/展示布局/user.jsx';

export default class Demo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="code-box-demo">
                    <div>移动端初始化组件</div>
                </div>
                <Use>
                    <h1>用法</h1>
                    <pre>
                        代码结构
                    </pre>
                    <h1>API</h1>
                    <pre>
                        说明
                    </pre>
                </Use>
                <User auth="范例作者" compatibility="ie9,google,firefox"></User>
            </React.Fragment>
        )
    }
}


