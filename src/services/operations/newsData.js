import { useDispatch, useSelector } from "react-redux";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/newsSlice";


export async function getNews(keyword) {
    let data = [];
    try {
        const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=07e86befc5794f3b980e880e7afeba71`

        const response = await apiConnector("GET", "https://newsapi-github-io.onrender.com/getnews");


        // if (!(response.data.status === "ok")) {
        //     throw new Error("server is busy right now")
        // }
        // console.log("GET ALL NEWS API RESPONSE: ", response)
        data = response.data;
    } catch (error) {
        console.log("GET ALL NEWS API RESPONSE: ", error)
    }
    return data;
}

export async function getPopularNews() {
    let data = [];
    try {
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=07e86befc5794f3b980e880e7afeba71';
        const response = await apiConnector("GET", url);
        if (!(response.data.status === "ok")) {
            throw new Error("server is busy right now")
        }
        // console.log("GET ALL NEWS API RESPONSE: ", response)
        data = response.data.articles;
    } catch (error) {
        console.log("GET ALL NEWS API RESPONSE: ", error)
    }
    return data;
}

export async function getAllCategoryNews() {
    let data = [];
    try {
        // const response = await apiConnector("GET", "https://newsapi.org/v2/top-headlines/sources?apiKey=07e86befc5794f3b980e880e7afeba71");
        // // console.log(response)
        // if (!(response.data.status === "ok")) {
        //     throw new Error("server is busy right now")
        // }
        const response = await apiConnector("GET", "https://newsapi-github-io.onrender.com/getallcategorynews");
        data = response.data;
    } catch (error) {
        console.log("category api error", error)
    }
    return data;
}
