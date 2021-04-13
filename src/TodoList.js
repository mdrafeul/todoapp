import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


const TodoList = (props) => {
    
    return (
        <div className='todoStyle'>
            <FontAwesomeIcon icon={faTimes}
                onClick={() => {
                    props.onSelect(props.id)
                }}
            />
            <li>{props.text}</li>
        </div>
    )
}

export default TodoList
