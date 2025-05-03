import {createStore} from 'vuex';
import axios from 'axios';
export default createStore({
    state:{
        headlineNews:null

    },
    getters:{
        getHeadlineNews(state){
        return state.headlineNews}

    },
    mutations:{
        Set_Headline_News(state, headlineNews){
            state.headlineNews= headlineNews 


        }
        

    },
    actions:{
        async fetchHeadlineNews({commit}) {
            const response= await axios.get("https://alvahtek.com/projects/ota/api/news-api/news.php?type=headline")
            commit('Set_Headline_News', response.data)
            console.log(response.data)
        }

    }
})