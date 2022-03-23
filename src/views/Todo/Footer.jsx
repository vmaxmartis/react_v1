import React, { memo } from 'react'

const Footer = memo((props) => {
    const { statusFilter, activeBtn, clearCTodo, totalTodo, numOfTodos } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <span>{totalTodo == 1 ? `Have 1 item` : totalTodo > 1 ? `Have ${totalTodo} items` : 'No job right now'}</span> 
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={`${activeBtn === 'all' ? "selected" : ''}`}
                        onClick={() => statusFilter('all')}
                    >
                        All
                    </a>
                </li>
                <span></span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                <li>
                    <a
                        href="#/active"
                        className={`${activeBtn === 'active' ? "selected" : ''}`}
                        onClick={() => statusFilter('active')}
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        className={`${activeBtn === 'complete' ? "selected" : ''}`}
                        onClick={() => statusFilter('complete')}
                    >
                        Complete
                    </a>
                </li>
            </ul>
            {
                totalTodo < numOfTodos && <button className="clear-completed" onClick={clearCTodo}>Clear completed</button>
            }
        </footer>
    )
})

export default Footer