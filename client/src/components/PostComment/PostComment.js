import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import {Comment} from "semantic-ui-react";
import history from '../../history.js';
    
export default class PostComment extends React.Component {
  
    render(props) {
        return (
            <Comment>
                <Comment.Avatar src='../img/default_avatar.jpg' />
                <Comment.Content>
                    <Comment.Author as={Link} to={`/users/${this.props.author_id}`}>{this.props.author}</Comment.Author>
                    <Comment.Metadata>
                        
                    </Comment.Metadata>
                    <Comment.Text>{this.props.body}</Comment.Text>
                </Comment.Content>
            </Comment>
        );
    }
}