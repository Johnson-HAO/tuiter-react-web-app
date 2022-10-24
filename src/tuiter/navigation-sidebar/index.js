import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
            <div className="list-group">
                <a href="/" className="list-group-item">Tuiter</a>
                <Link to="/tuiter/home" className={`list-group-item
                        ${active === 'home'?'active':''}`}><i className="bi bi-house me-1"></i>
                    Home
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item
                        ${active === 'explore'?'active':''}`}><i className="bi bi-hash me-1"></i>
                    Explore
                </Link>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>

                <a href="/" className={`list-group-item
                        ${active === 'notifications'?'active':''}`}><i className="bi bi-bell me-1"></i>
                    Notifications
                </a>
                <a href="/" className={`list-group-item
                        ${active === 'messages'?'active':''}`}><i className="bi bi-envelope me-1"></i>
                    Messages
                </a>
                <a href="/" className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`}><i className="bi bi-bookmark me-1"></i>
                    Bookmarks
                </a>
                <a href="/" className={`list-group-item
                        ${active === 'lists'?'active':''}`}><i className="bi bi-list me-1"></i>
                    Lists
                </a>
                <a href="/" className={`list-group-item
                        ${active === 'profile'?'active':''}`}><i className="bi bi-person me-1"></i>
                    Profile
                </a>
                <a href="/" className={`list-group-item
                        ${active === 'more'?'active':''}`}><i className="bi bi-three-dots me-1"></i>
                    More
                </a>
            </div>
    );
};
export default NavigationSidebar;

