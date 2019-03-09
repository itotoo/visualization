import React, { Component } from 'react';
import style from './index.scss';
// 引入通用展示布局
import Use from '../../../../components/展示布局/use.jsx';
import User from '../../../../components/展示布局/user.jsx';
// 引入栗子 & 支持NPM导入
import Demo from './demo/demo.jsx';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <div className="code-box-demo">
                    <div>初始化组件</div>
                    <Demo />
                </div>
                <Use>
                    <h1>用法</h1>
                    <pre>
                        <code>
                            import Demo from '/lib/Demo';  // 加载 JSX
                        </code>
                        import  '/lib/Demo/style';     // 加载 CSS
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


