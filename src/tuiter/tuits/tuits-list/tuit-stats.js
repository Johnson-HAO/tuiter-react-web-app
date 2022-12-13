/*import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis as fasEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faOutlinedHeart} from '@fortawesome/free-regular-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet} from '@fortawesome/free-solid-svg-icons'
import {updateTuitThunk} from "../../../services/tuits-thunks.js";
import {useDispatch} from "react-redux";
library.add(fasEllipsis, faSolidHeart, faOutlinedHeart, faComment, faArrowUpFromBracket, faRetweet)*/


import {FaComment, FaHeart, FaRetweet, FaShare, FaThumbsDown} from 'react-icons/fa';
import React from 'react';
import {likeTuit, unlikeTuit} from '../../reducers/tuits-reducer.js';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateTuitThunk} from "../../../services/tuits-thunks.js"

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    const [reply, setReply] = useState(tuit.replies);
    const [retuits, setRetuits] = useState(tuit.retuits);

    const dispatch = useDispatch();

    const likeTuitHandler = (tuit) => {
                dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
                liked: true
                }),
                likeTuit(tuit))
    }

    const unlikeTuitHandler = (tuit) => {
        //alert(action.payload.tuit)
        dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1,
                liked: false
            }),
            unlikeTuit(tuit))
        }


    return (
        <ul className='d-flex flex-wrap ms-4 mt-2 list-unstyled'>
            <li className="flex-fill">
                <button
                    onClick={() => setReply(reply + 1)}
                    className="btn btn-white rounded-pill">
                    <FaComment className="me-1 mb-1"/>{reply}
                </button>
            </li>

            <li className="flex-fill">
                <button
                    onClick={() => setRetuits(retuits + 1)}
                    className="btn btn-white rounded-pill">
                    <FaRetweet className="me-1 mb-1"/>{retuits}
                </button>
            </li>

            <li className="flex-fill">
                {!tuit.liked &&
                    <button
                        onClick={() =>
                            likeTuitHandler(tuit)}
                        className="btn btn-white rounded-pill">
                        <FaHeart className="me-1 mb-1"/>{tuit.likes}
                    </button >}
                {tuit.liked &&
                    <button
                        onClick={() =>
                            unlikeTuitHandler(tuit)
                        }
                        className="btn btn-white rounded-pill">
                        <FaHeart className="me-1 mb-1 text-danger"/>{tuit.likes}
                    </button >}
            </li>
            <li className="flex-fill">
                {!tuit.disliked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes + 1,
                            disliked: true
                        }))}
                        className="btn btn-white rounded-pill">
                        <FaThumbsDown className="me-1 mb-1"/>{tuit.dislikes}
                    </button >}
                {tuit.disliked &&
                    <button
                        onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes -1,
                            disliked: false
                        }))}
                        className="btn btn-white rounded-pill">
                        <FaThumbsDown className="me-1 mb-1 text-primary"/>{tuit.dislikes}
                    </button >}
            </li>
            <li className="flex-fill">
                <button className="btn btn-white rounded-pill"><FaShare className="me-1 mb-1"/></button>
            </li>
        </ul>
    )
    /*{
        tuit = {
            "_id": 100,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": false,
            "disliked": false,
            "dislikes": 0,
            "replies": 1,
            "retuits": 2,
            "likes": 5,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();

    return (
        <div className="row pt-2 pb-2 d-flex justify-content-around">
            <div className="col-2 align-content-center text-secondary">
                <a href="/" className="text-decoration-none text-secondary small">
                    <FontAwesomeIcon icon={faComment} className="pe-2 text-decoration-none text-secondary fa-1x"/>
                    {tuit.replies}
                </a>
            </div>
            <div className="col-2 align-content-center text-secondary">
                <a href="/" className="text-decoration-none text-secondary small">
                    <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x"/>
                    {tuit.retuits}
                </a>
            </div>
            <div className="col-2 text-decoration-none text-secondary">
                <a href="/" className="text-decoration-none text-secondary small">
                    { tuit.liked && <FontAwesomeIcon icon={faSolidHeart}
                                                     className="pe-2 text-danger fa-1x"
                                                     onClick={() => dispatch(updateTuitThunk({
                                                         ...tuit,
                                                         liked: false,
                                                         likes: tuit.likes - 1}))}/> }
                    { !tuit.liked && <FontAwesomeIcon icon={faOutlinedHeart}
                                                      className="pe-2 text-secondary fa-1x"
                                                      onClick={() => dispatch(updateTuitThunk({
                                                          ...tuit,
                                                          liked: true,
                                                          likes: tuit.likes + 1}))}/> }
                    {tuit.likes}
                </a>
            </div>
            <div className="col-2 text-decoration-none text-secondary">
                <a href="/" className="text-decoration-none text-secondary small">
                    { tuit.disliked && <i className="bi bi-hand-thumbs-down-fill pe-2 text-danger fa-1x"
                                          onClick={() => dispatch(updateTuitThunk({
                                              ...tuit,
                                              disliked: false,
                                              dislikes: tuit.dislikes - 1}))}/> }
                    { !tuit.disliked && <i className="bi bi-hand-thumbs-down pe-2 text-secondary fa-1x"
                                           onClick={() => dispatch(updateTuitThunk({
                                               ...tuit,
                                               disliked: true,
                                               dislikes: tuit.dislikes + 1}))}/> }
                    {tuit.dislikes}
                </a>
            </div>
            <div className="col-2 text-decoration-none">
                <a href="/" className="text-secondary"><FontAwesomeIcon icon={faArrowUpFromBracket}/></a>
            </div>
        </div>*/
};
export default TuitStats;