import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../github/github.api";
import {setupListeners} from '@reduxjs/toolkit/query'
import { githubReducer } from "../github/github.slice";

export const store = configureStore({
    reducer:{
        [githubApi.reducerPath]:githubApi.reducer,
        github: githubReducer
    },
    //By the way, it has been working without any middleware - I'd like to point the fact
    //Here we connect githup api custom middlware to our default middlware 
    //And, I suppose, this is an optional line, but I'm not sure
    middleware: getDefaultMiddlware => getDefaultMiddlware().concat(githubApi.middleware)
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>