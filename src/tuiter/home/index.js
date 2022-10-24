import React from "react";
import PostList from "../post-list";

const HomeComponent = () => {
    return(
        <>
            <div className="row mt-2">
                <h1>Home</h1>
                <PostList/>
            </div>
        </>
    )
}
export default HomeComponent;