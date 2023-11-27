import React from 'react'
import "./Comments.css"

const Comment = ({id, text, comments}) => {

    const newComments = comments.filter(comment => comment.parentId === id);

    return (
        <div key={id} className='comment'>
            <div className='comment-body'>
                <div className='comment-header'>
                    <div className="comment-data fw-bold">29 تیر 1403 - <span>امین بلوچی</span></div>
                    <button className="btn">پاسخ</button>
                </div>
                <div className="mt-4">
                    <p className="m-0 p-2">{text}</p>
                </div>
            </div>
            {
                newComments.map(c => {
                    return <Comment id={c.id} text={c.text} comments={newComments}/>
                })
            }
        </div>
    )
}

export default Comment