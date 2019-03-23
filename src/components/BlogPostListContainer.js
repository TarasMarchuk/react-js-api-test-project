import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";
import {Spinner} from "./Spinner";
import {Paginator} from "./Paginator";


const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
};

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

        return (
            <div>
                <BlogPostList posts={posts} />
                <Paginator currentPage={3} pageCount={5} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);