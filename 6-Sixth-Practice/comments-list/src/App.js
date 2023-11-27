import React from 'react'
import comments from "./data/comments.json"
import CommentsList from './components/CommentsList/CommentsList'
import CommentsBody from './components/CommentsBody/CommentsBody'
import Header from './components/Header/Header'
const App = () => {
    return (
        <div>
            {
                <CommentsBody>
                    <Header/>
                    <CommentsList comments={comments}/>
                </CommentsBody>
            }
        </div>
    )
}

export default App