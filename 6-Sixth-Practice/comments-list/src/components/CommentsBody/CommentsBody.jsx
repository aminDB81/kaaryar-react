// CommentBody component
import "./CommentsBody.css"
import {Fragment} from "react";
const CommentsBody = ({children}) => {
    return (
        <>
        <div className='comments-body container mt-4' >{children}</div>
        </>
    )
}
export default CommentsBody;