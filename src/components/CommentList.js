import React from 'react';
import timeago from 'timeago.js';
import {Message} from "./Message";

export class CommentList extends React.Component {
    render() {
        const {commentList} = this.props;

        if (null === commentList) {
            return <Message message="No comments yet" />;
        }

        return (
            <div className="card mb-3 mt-3 shadow-sm">
                {commentList.map(comment => {
                    return (
                        <div className="card-body border-bottom" key={comment.id}>
                            <p className="card-text mb-0">
                                {comment.content}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {timeago().format(comment.published)} by&nbsp;
                                    {comment.author.name}
                                </small>
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    };
}