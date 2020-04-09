import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(item => {
                return(
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
                )
            })}
        </div>
    );
};

export default TodoList;