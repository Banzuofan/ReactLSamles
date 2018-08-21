import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import { formatTime } from '../Util/Util'



export default class SimpleComment extends Component {

    render() {
        const { user, comment, publish } = this.props;
        const datestr = formatTime(publish);
        return (
            <div>
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>{user}</Comment.Author>
                            <Comment.Metadata>
                                <div>{datestr}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment}</Comment.Text>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
                <hr />
            </div>
        )
    }
}
