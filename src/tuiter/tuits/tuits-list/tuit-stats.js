import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis as fasEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faOutlinedHeart} from '@fortawesome/free-regular-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet} from '@fortawesome/free-solid-svg-icons'

library.add(fasEllipsis, faSolidHeart, faOutlinedHeart, faComment, faArrowUpFromBracket, faRetweet)

const TuitStats = (
    {
        tuit = {
            "_id": 100,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpeg",
            "liked": false,
            "replies": 1,
            "retuits": 2,
            "likes": 5,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    return (
        <div className="row wd-tuit-interactions pt-2 pb-2">
            <div className="wd-interaction-comment col-3 align-content-center text-secondary">
                <a href="#" className="text-decoration-none text-secondary small">
                    <FontAwesomeIcon icon={faComment} className="pe-2 text-decoration-none text-secondary fa-1x"/>
                    {tuit.replies}
                </a>
            </div>
            <div className="wd-interaction-retweet col-3 align-content-center text-secondary">
                <a href="#" className="text-decoration-none text-secondary small">
                    <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x"/>
                    {tuit.retuits}
                </a>
            </div>
            <div className="wd-interaction-like col-3  text-decoration-none text-secondary">
                <a href="#" className="text-decoration-none text-secondary small">
                    { tuit.liked && <FontAwesomeIcon icon={faSolidHeart} className="pe-2 text-danger fa-1x"/> }
                    { !tuit.liked && <FontAwesomeIcon icon={faOutlinedHeart} className="pe-2 text-secondary fa-1x"/> }
                    {tuit.likes}
                </a>
            </div>
            <div className="wd-interaction-share col-3 text-decoration-none">
                <a href="#" className="text-secondary"><FontAwesomeIcon icon={faArrowUpFromBracket}/></a>
            </div>
        </div>
    );
};
export default TuitStats;