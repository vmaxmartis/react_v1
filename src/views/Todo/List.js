import React, { memo } from 'react'
import Todo from './Todo'

const List = memo(props => {
    const { listTodo, checkAll, checkedAll } = props //nhận lại 
    return (
        <section className="main">
            <input
                className="toggle-all"
                type="checkbox"
                onChange={() => {
                    checkAll()
                }}
                checked={checkedAll}
            />
            <label htmlFor="toggle-all" onClick={checkAll} ></label>
            <ul className="todo-list"> 
                {
                    listTodo.map((todo, i) => <Todo i={i} key={todo.id} todo={todo} {...props} />) //truyền từng todo
                } 
            </ul>
        </section>
    )
})

export default List