import React from 'react'
import './styles/PostOption.css';

function PostOption({ Icon, title, color }) {
    return (
        <div className="postOption">
            <Icon style={{ color: color }} />
            <h4>{title}</h4>
        </div>
    )
}

export default PostOption