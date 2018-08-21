import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Icon, Label, Segment } from 'semantic-ui-react'

import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentApp.css';

import { addComment, increaseAction } from '../Redux/Actions/CommentActions';

class CommentApp extends Component {


    // loadComments = () => {
    //     let commentData = localStorage.getItem('comments');
    //     console.log(commentData);
    //     if (commentData){
    //         let _comments = JSON.parse(commentData);
    //         this.setState({ comments: _comments});
    //     }
    // }

    constructor(props, context){
        super(props, context);

    }

    saveComments = (comments) => {
        if(comments){
            localStorage.setItem('comments', JSON.stringify(comments));
        }
    }

    handleSubmitComment = (comment) =>{
        // this.state.comments.push(comment);
        // this.setState({comments:this.state.comments});

        this.props.handleAddComt(comment);
    }

    handleIncrease = () => {
        this.props.onIncreaseClick()
    }

    componentWillMount() {
        // this.loadComments();

        let unsubscribe = this.context.store.subscribe(() => {
            // console.log(`this.context.store++${JSON.stringify(this.context.store.getState())}`);

            const { comments } = this.context.store.getState();
            this.saveComments(comments);
        })

        this.unsubscribe = unsubscribe;
    }

    render() {
        const { like, comments, onIncreaseClick } = this.props;
        return (
            <div className='wrapper'>
                <div style={{width:'100%', backgroundColor:'lightgray',height:'40px',lineHeight:'40px'}}>
                    <span style={{marginLeft:'10px', color:'white', fontWeight:'bold', fontSize:'20px'}}>Tell us what you want</span>
                    <span style={{ float:'right', verticalAlign:'center', height:'100%' }}>
                        <Button as='div' labelPosition='right'>
                            <Button color='blue' onClick={onIncreaseClick}>
                                <Icon name='thumbs up' />
                                Like
                        </Button>
                            <Label as='a' basic color='blue' pointing='left'>{like}</Label>
                        </Button>
                    </span>
                </div>
                
                <CommentInput onSubmit={this.handleSubmitComment} />
                <Segment>
                    <CommentList comments={comments} />
                </Segment>                
            </div>
        )
    }

    componentWillUnmount(){
        if(this.unsubscribe !== null){
            this.unsubscribe();
        }
    }
}

CommentApp.propsTypes = {
    like: PropTypes.number.isRequired,
    handleAddComt: PropTypes.func.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

CommentApp.defaultProps = {
    like: 0,
    comments: []
}

//容器组件和子组件传递store方式配置
CommentApp.contextTypes = {
    store: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        comments: state.CommentApp.comments,
        like: state.CommentApp.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleAddComt: comment => dispatch(addComment(comment)),
        onIncreaseClick: () => dispatch(increaseAction())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(CommentApp);
