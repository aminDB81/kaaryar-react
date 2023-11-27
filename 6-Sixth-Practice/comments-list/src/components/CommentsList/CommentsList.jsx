import React from 'react'
import Comment from '../Comments/Comments'
import "./CommentsList.css"

const CommentsList = ({comments = []}) => {
    return (
        <>
            {
                renderComments(comments)
            }
        </>
    )
}
export default CommentsList

function renderComments(comments) {
    return comments.map(comment => {
        return <Comment id={comment.id} text={comment.text} comments={comments}/>
    })
}
