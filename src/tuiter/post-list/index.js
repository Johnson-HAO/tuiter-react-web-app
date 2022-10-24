import React from "react";
import posts from "./posttable.json";
import PostListItem from "./post-list-item.js";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                posts.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    )
}
export default PostList;