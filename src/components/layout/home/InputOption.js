import React from 'react'
import './styles/InputOption.css';

function InputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon className='inputOption__icon' style={{ color: color }} />
            {/*<h4>{title}</h4>*/}
        </div>
    )
}

export default InputOption