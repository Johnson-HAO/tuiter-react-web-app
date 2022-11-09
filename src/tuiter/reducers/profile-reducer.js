import { createSlice } from "@reduxjs/toolkit";


const profile =   {
    firstName: "Elon",
    lastName: "Musk",
    handle: "@elonmusk",
    profilePicture: "../images/elonmusk.jpg",
    bannerPicture: "../images/tesla-banner.jpeg",
    bio: "A business magnate and investor. The founder, CEO, and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; president of the Musk Foundation; and owner and CEO of Twitter, Inc.",
    website: "tesla.com",
    location: "Los Angels, CA",
    dateOfBirth: "6/28/1971",
    dateJoined: "June 2009",
    numberOfTweets: "6,114",
    followingCount: "47",
    followersCount: "17.5M"
}


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state = {...action.payload};
            return state
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;