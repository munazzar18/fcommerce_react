import { createSlice, nanoid } from "@reduxjs/toolkit"
import { RootState } from "../../state/Store"


interface PostsSlice {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    }
}

interface Payload {
    id: string,
    title: string,
    content: string,
    userId: number
}

const initialState: PostsSlice[] = [
    {
        id: 1,
        title: 'Learning Redux Toolkit',
        content: 'I have heard good things about redux toolkit',
        user: {
            id: 1,
            name: 'Dude Lebowski'
        }
    },
    {
        id: 2,
        title: 'Slices...',
        content: 'The more i say slice, the more i want pizza',
        user: {
            id: 3,
            name: "Dave Gray"
        }
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:
        {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title: string, content: string, userId: number) {
                return {
                    payload: <Payload>{
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = ((state: RootState) => state.posts)
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer