import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
//import Nav from "../nav";
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import profileReducer from "./reducers/profile-reducer.js";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile/index.js";
import EditProfileComponent from "./edit-profile/index.js";
///
///

const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home"    element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>}/>
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>

                        </Routes>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter