import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add Todo
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    console.log(node.value)
    const text = node.value.trim()//不能直接node.value?貌似也能起作用。。。。trim()是es6提供的用来去除字符串前后空格的方法
    this.props.onAddClick(text)//这里触发了AddTodo组件的onAddClick（时间名可以随便给，但是要语义化）事件，并把text传入
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}