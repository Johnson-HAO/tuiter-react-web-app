import React from "react";
const PostListItem = (
    {
        post = {
            "_id": 100,
            "avatar": "../../images/elonmusk.jpg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "message": "Amazing show about @inspiration4x mission!",
            "image": "../../images/inspiration4.jpg",
            "contentTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "contentSnippet": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
            "contentOwner": "netflix.com",
            "numComments": "4.2K",
            "numRetweets": "3.5K",
            "numLikes": "37.5K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={post.avatar} className="rounded-circle" height={30} alt={""}></img>
                </div>
                <div className="col-10">
                    <div>
                        {post.userName} <i className="bi bi-patch-check"></i> {post.handle} . {post.time}
                        <i className="bi bi-three-dots float-end"></i>
                    </div>
                    <div className="small">
                        {post.message}
                    </div>
                    <div className="pt-2">
                        <img src={post.image} className="w-100 rounded-corners-all-around" alt={""}></img>
                        <div>
                            <h5 className="t-2 small fw-bold">{post.contentTitle}</h5>
                            <div className="small text-secondary">{post.contentSnippet}</div>
                            <div>{post.contentOwner}</div>
                        </div>
                    </div>
                    <div className="row pt-2 pb-2">
                        <div className="col-3">
                            <a href="/" className="text-secondary">
                                <i className="bi bi-chat"></i>{post.numComments}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="/" className="text-secondary">
                                <i className="bi bi-repeat"></i>{post.numRetweets}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="/" className="text-secondary">
                                <i className="bi bi-heart"></i>{post.numLikes}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="/" className="text-secondary">
                                <i className="bi bi-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}
export default PostListItem;