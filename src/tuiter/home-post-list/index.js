import React from "react";
import postsArray from "./posttable.json";
import PostListItem from "./post-list-item.js";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    )
}
export default PostList;