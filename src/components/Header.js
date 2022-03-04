import React, { memo, useState } from 'react'

const Header = memo((props) => {
    const [text, setText] = useState('')
    const { addTodo } = props //nhận lại hàm

    const onAddTodo = (event) => {
        if (event.key === 'Enter' && text) {
            addTodo({
                id: new Date().valueOf(), //tạo id dụa trên ngày
                text,
                isCompleted: false
            })
            setText('')
        }
    }

    return (
        <header className="header">
            <h1>TODO LIST</h1>
            <input
                className="new-todo"
                placeholder="Thêm nhiệm vụ mới . . ."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={onAddTodo}
            />
        </header>
    )
})

export default Header // XUẤT CPN HEADER