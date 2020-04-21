import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({todos, handler, loading}) {
    return (
        <div>
            {todos.length ?
            <ul>
                {todos.map((item, i) => {
                    return  <TodoItem item = {item} key = {item.id} onChange={handler} num={i}/>
                })}
            </ul> : (loading ? null:"No items")}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    handler: PropTypes.func.isRequired
}

export default TodoList;