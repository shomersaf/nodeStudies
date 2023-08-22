import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search:string) => ({
        url: "search/users",
        params:{
            //these two params below are the only gihub special params
            //in a case of other api - use its own params if it's needed
            q:search,
            per_page: 10
        }
      }),
      //here is the callback transforming the data from response according to 
      //response indivial json structure specified by developer (yes, I mean by you)
      //it there is an error - change the type at line 10 according to what you wanna get as a response
      transformResponse:(response:ServerResponse<IUser>)=>response.items
    }),
  }),
});
export const {useSearchUsersQuery} = githubApi