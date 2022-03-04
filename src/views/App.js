import React, { PureComponent } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/List'
//sử dụng các component
import '../styles/App.css' // stye


const filterTodosLeft = (listTodo = []) => {
  return listTodo.filter(item => !item.isCompleted)
}
const filterStatus = (listTodo = [], status = '', id) => {
  switch (status) {
    case 'active':
      return listTodo.filter(item => !item.isCompleted)
    case 'complete':
      return listTodo.filter(item => item.isCompleted)
    case 'delete':
      return listTodo.filter(item => item.id !== id)
    default:
      return listTodo
  }
}//filter
class App extends PureComponent {
  state = {
    listTodo: [],
    checkedAll: false,
    status: 'all',
    idEdit: ''
  }

  addTodos = (todo = {}) => {
    this.setState(preState => ({
      listTodo: [...preState.listTodo, todo]
    }))
  }


  markCompleted = (id = '') => {
    const { listTodo } = this.state
    let checkedAll = true
    const updateList = listTodo.map(item => {
      if ((!item.isCompleted && item.id !== id) || (item.isCompleted && item.id === id)) {
        checkedAll = false
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({
      checkedAll,
      listTodo: updateList
    })
  }
  clearCTodo = () => {
    this.setState(preState => ({
      listTodo: filterTodosLeft(preState.listTodo)
    }))
  }

  getEditTodo = (id = '') => {
    this.setState({
      idEdit: id
    })
  }

  editTodo = (todo, index) => {
    const { listTodo } = this.state
    listTodo.splice(index, 1, todo)
    this.setState({ listTodo })
  }

  delTodo = (id = '') => {
    this.setState(viewState => ({
      listTodo: filterStatus(viewState.listTodo, 'delete', id)
    }))
  }
  checkAll = () => {
      const { listTodo, checkedAll } = this.state
      const updateList = listTodo.map(item => ({ ...item, isCompleted: !checkedAll }))
      this.setState(preState => ({
        checkedAll: !preState.checkedAll,
        listTodo: updateList
      }))
    }
  render() { 
    const { listTodo, checkedAll, status, idEdit } = this.state 
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodos}/>
        <List
          listTodo={filterStatus(listTodo, status)}
          markCompleted={this.markCompleted}
          checkAll={this.checkAll}
          checkedAll={checkedAll}
          idEdit={idEdit}
          getEditTodo={this.getEditTodo}
          editTodo={this.editTodo}
          delTodo={this.delTodo}
        />
        <Footer
          activeBtn={status}
          statusFilter={(status) => this.setState({ status })}
          clearCTodo={this.clearCTodo}
          totalTodo={filterTodosLeft(listTodo).length}
          numOfTodos={listTodo.length}
        />
      </div>
    );

  }
}
export default App;