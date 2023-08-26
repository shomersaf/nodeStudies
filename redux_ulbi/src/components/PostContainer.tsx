import { IPost } from "../models/IPost"
import { postApi } from "../services/PostService"
import PostItem from "./PostItem";
import { useState } from 'react'

export default function PostContainer() {
    const [limit, setLimit] = useState(100)
    const { data: posts, error, isLoading, refetch } = postApi.useFetchAllPostsQuery(limit, {
        //опциональная фича - добавляет периодический автозапрос на сервер
        // pollingInterval:1000 
    })
    const [createPost, { }] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()
    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
        //on post body click!!!
    }
    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                <button onClick={() => { refetch() }}>Refetch</button>
                {isLoading && <h2>Loading...</h2>}
                {error && <h2>Something went wrong...</h2>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </div>
        </div>
    )
}