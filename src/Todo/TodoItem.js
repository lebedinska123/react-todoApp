import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function TodoItem({item, onChange, num}) {
    const {removeTodo} = useContext(Context);
    return (
        <li>
            <div>
                <strong>{num + 1}</strong>
                <input type="checkbox" onChange={() => onChange(item.id)} checked={item.completed}/>
                <span className={item.completed ? 'complete':''}>
                    {item.title}
                </span>
            </div>
            <button className="rm" onClick={removeTodo.bind(null, item.id)}>&times;</button>
        </li>
    );
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;