import React, { Component } from 'react'
import SimpleComment from './SimpleComment';

export default class CommentList extends Component {

    render() {
        const { comments, ...rest } = this.props;
        
        if (comments && comments.length > 0) {
            comments.sort((c1, c2) => {
                return c2.publish - c1.publish;
            });
        }

        return (
            <div style={{ textAlign: 'left' }}>
                {comments.map((comment, index) => 
                    <SimpleComment key={index} user={comment.user} comment={comment.comment} publish={comment.publish} />
                )}
            </div>
        )
    }
}

CommentList.defaultProps = {
    comments: []
}
