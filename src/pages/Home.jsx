import React, { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import "../App.css"
import { getNews, getPopularNews } from '../services/operations/newsData';
import GridImage from '../components/Home/GridImage';
import MainContent from '../components/Home/mainsection/MainContent';
import Discover from '../components/Home/Discover/Discover';
import Footer from '../components/common/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../slices/newsSlice';

function Home({ business, general }) {

    const [keyword, setKeyword] = useState('');
    const [allNews, setAllNews] = useState([]);
    const [popularNews, setPopularNews] = useState([]);
    const { loading } = useSelector((state) => state.news)
    const dispatch = useDispatch();


    async function fetchWorldNews() {
        let data = await getNews("World");
        if (data) {
            setAllNews(data.filter((news) => (news.content != "[Removed]" && news.urlToImage != null && news.source.id != null)));
        }
    }

    async function fetchPopularNews() {
        let data = await getPopularNews();
        if (data) {
            setPopularNews(data.filter((news) => (news.content != "[Removed]" && news.urlToImage != null && news.source.id != null)));
        }
    }


    useEffect(() => {
        dispatch(setLoading(true))
        fetchWorldNews();
        fetchPopularNews();
        dispatch(setLoading(false))
    }, [])

    // console.log("all news ", allNews)
    return (
        <>
            {
                loading
                    ? <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <img src={"/loader.gif"} alt="loader" width={"300px"} />
                        <h2 style={{ marginTop: "-50px" }}>Loading...</h2>
                    </div>
                    :
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap-reverse" }}>
                            <h1 style={{}} className='heading-name'>Neighbor <span className='heading-second'>Good</span></h1>
                            <img src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fd21112dc-736f-4db3-959a-6304909957dc%2FLogo_green_png.png?table=block&id=b12625b9-cb25-4feb-96fb-fe5162121c4d&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=250&userId=&cache=v2" style={{ border: "#fff", height: '150px' }} className="img-thumbnail" alt="..." />
                        </div>
                        <Navbar setKeyword={setKeyword} keyword={keyword} isBusiness={business} />
                        <GridImage data={allNews.slice(0, 4)} />
                        <MainContent allPopularNews={allNews} keyword={keyword} />
                        <Discover />
                        <Footer />
                    </div>
            }
        </>

    )
}

export default Home