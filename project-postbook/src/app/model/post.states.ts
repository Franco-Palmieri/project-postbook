import { Post } from "./post.model"

export interface PostState{
    loading: boolean,
    posts: ReadonlyArray<Post>;
    post: Post
}