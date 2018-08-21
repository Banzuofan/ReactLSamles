import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Confirm } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class CommentInput extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            comment: { 
                user: '',
                comment: '',
                publish: 0
            },
            confirmVisible: false
        }
    }

    handleChange = (e, { name, value }) => {
        const {comment} = this.state;
        comment[name] = value;
        this.setState({
            comment:comment
        })
    }

    handleCancel = () => {
        const { confirmVisible, ...rest } = this.state;
        this.setState({
            confirmVisible: !confirmVisible,
            ...rest
        });
    }

    handleSubmit = () => {
    
        const { confirmVisible, comment } = this.state;

        if (!comment.user){
            // alert("please enter your name!");
            this.setState({
                confirmVisible: true,
                comment
            });
            return;
        }
        if (!comment.comment){
            alert("would you like to say something?");
            return;
        }
    
        const publish = new Date().getTime();
        comment.publish = publish;

        this.props.onSubmit(comment);

        this.handleReset();
    }

    handleReset = () => {
        this.setState({comment:{user:'',comment:'',publish:0}});
    }

    render() {
        const { comment } = this.state;
        return (
            <div style={{textAlign:'left'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input onChange={this.handleChange} name="user" label="UserName" placeholder="Please enter your name..." value={comment.user} />
                    <Form.TextArea onChange={this.handleChange} name="comment" label="Comment" placeholder="Please enter some text..." value={comment.comment} />
                    <Form.Group >
                        <Form.Button content="Submit" color='olive' />
                        <Form.Button type="button" content="Reset" onClick={this.handleReset} primary />
                    </Form.Group>
                </Form>

                <Confirm
                    open={this.state.confirmVisible}
                    content='please enter your name!'
                    confirmButton='Got it!'
                    onCancel={this.handleCancel}
                    onConfirm={this.handleCancel}
                />
            </div>
        )
    }

    componentDidMount() {
        // this.inputRef.focus()
    }
}

export default CommentInput;

