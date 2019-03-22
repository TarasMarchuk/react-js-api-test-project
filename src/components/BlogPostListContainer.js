import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";
import {Spinner} from "./Spinner";


const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
}

class BlogPostListContainer extends React.Component {
    componentDidMount() {
        setTimeout(this.props.blogPostListAdd, 3000);
        setTimeout(this.props.blogPostListAdd, 5000);
        setTimeout(this.props.blogPostListAdd, 7000);
        this.props.blogPostListFetch();
    }

    render() {
        const {posts, isFetching} = this.props;

        if (isFetching) {
            return (<Spinner/>);
        }

        return (<BlogPostList posts={posts} />);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);