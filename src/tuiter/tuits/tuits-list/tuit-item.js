import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
//import {deleteTuit} from "../../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";


const TuitItem = (
    {
        tuit = {
            "_id": 100,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "1h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": false,
            "replies": 1,
            "retuits": 2,
            "likes": 5,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));}

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         className="float-end rounded-circle"
                         src={`/images/${tuit.image}`} alt={`/images/${tuit.image}`}/>

                </div>
                <div className="col-10">

                    <span className="fw-bold small">{tuit.userName}</span>
                    <span className="px-1 text-primary"><i className="fa-solid fa-certificate"/></span>
                    <span className="small text-secondary">{tuit.handle} &middot;</span>
                    <span className="small text-secondary px-1">{tuit.time}</span>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>

                    <p className="small">{tuit.tuit}</p>
                    <TuitStats
                        key={tuit._id}
                        tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;