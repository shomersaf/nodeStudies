import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser, ServerResponse } from "../models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus:true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search:string) => ({
        url: "search/users",
        params:{
            //these two params below are the only gihub special params
            //in a case of other api - use its own params if it's needed
            q:search,
            per_page: 20
        }
      }),
      //here is the callback transforming the data from response according to 
      //response indivial json structure specified by developer (yes, I mean by you)
      //it there is an error - change the type at line 10 according to what you wanna get as a response
      transformResponse:(response:ServerResponse<IUser>)=>response.items
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (userName:string) => ({
        url: `users/${userName}/repos`
      }),
    }),
    //if we were creating user:
    //  createUser: build.mutation<any, void>({
     // query: () => ''
     // }),
//and in export downwords we should add "useCreateUserQuery", etc
  }),
});
//here we have the hooks generated. one of them is chosen by me with "lazy" prefix to 
//provide its action when we wish it to act (on click only), and not on every upload as if it is not "lazy" one
export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi