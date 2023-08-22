import { useEffect, useState } from "react"
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../../github/github.api"
import { useDebounce } from "../../hooks/debounce"
import { RepoCard } from "../../components/RepoCard"

export default function HomePage() {
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState(false)
    //это хук, который используется для того, чтоб кнсл лг или люб др изменения внутри юзэффекта
    //не вызывались слишком часто, а только тогда, когда прерывается ввежение текста в инпут
    //thus it provides a kind of optimization of getting data on input
    const debounced = useDebounce(search)
   //Downwards there is a data parameter which we can rename if wanted like this, for examle, "data:users"
   // or "data:products" and then adress to it by its new name - users or products, etc
    const { isLoading,isError, data } = useSearchUsersQuery(debounced, {
        //here is the parameter that determines the cases disabling the query
        skip: debounced.length<3,
        //optional parameter providing refetching on user's coming back to focus after being absent
        //it requires to be set in two additioal places besides it: in the store as line "setupListeners(store.dispatch)"
        //and as the same parameter "refetchOnFocus:true" in api file
        refetchOnFocus:true
    })

    const [fetchRepos,{isLoading:areReposLoading, data:repos}] = useLazyGetUserReposQuery()

    useEffect(()=>{
        setDropdown(debounced.length>=3 && data?.length! > 0)
    },[debounced, data])


const clickHandler =(userName:string)=>{
    fetchRepos(userName)
    setDropdown(false)
}

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className="wentWrong">Something went wrong...</p>}
            <div className="scrollContainer">
                <input type="text" className="border py-2 px-4 w-full h-[42px] mb-2" placeholder="Search Github User  by Name..." value={search} onChange={e => setSearch(e.target.value)} />
              {dropdown &&  <ul>
                  
                    {isLoading && <p className="loading">Loading...</p>} 
                    {data?.map(user=>
                        (
                            <li key={user.id} onClick ={()=>clickHandler(user.login)}>{user.login}</li>
                        ))} 
                </ul>}
            </div>
            <div className="container">
                {areReposLoading && <p className="loading">Repos are loading...</p>}
                <h3>Repos:</h3>
                {repos?.map(repo => <p><RepoCard repo = {repo} key={repo.id}/></p>)}
            </div>
        </div>
    )
}