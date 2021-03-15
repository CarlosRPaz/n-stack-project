import React, { forwardRef } from 'react'
import "./styles/Post.css";
import { Avatar } from '@material-ui/core';
import PostOption from './PostOption';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <MoreVertIcon className='moreverticon' />
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <PostOption
                    Icon={ThumbUpAltOutlinedIcon}
                    title="Like"
                    color="gray"
                />
                <PostOption
                    Icon={ChatOutlinedIcon}
                    title="Comment"
                    color="gray"
                />
                <PostOption
                    Icon={ShareOutlinedIcon}
                    title="Share"
                    color="gray"
                />
            </div>
        </div>
    )
})

export default Post