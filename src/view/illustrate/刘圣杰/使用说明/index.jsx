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
                    <div>使用说明：远程访问无效时，建议更新到本地下载运行预览</div>
                </div>
                <Use>
                    <img src="../../static/illustrate/img/illustrate.png" alt=""/>
                </Use>
                <User auth="范例作者" compatibility="ie9,google,firefox"></User>
            </React.Fragment>
        )
    }
}


