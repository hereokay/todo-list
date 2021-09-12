import React, { Component } from "react";
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';

class App extends Component{
    render(){
        return(
            <TodoListTemplate form={<Form/>}>
              템플릿 완성
            </TodoListTemplate>
        );
    }
}

export default App;