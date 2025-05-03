import {createStore} from "vuex"
import axios from "axios"

export default createStore({
    state:{
        users:[],
        posts:[],


    },
    getters:{
        

    },
    mutations:{
        SetUsers(state,users){
            state.users= users
        },
        SetPosts(state, posts){
            state.posts= posts
        }

    },
    actions:{
        async GetUsers({commit}){
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            commit("SetUsers", res.data)
        },
        async GetPosts({commit}) {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            commit ("SetPosts", response.data)
            
        }
        

    }
})