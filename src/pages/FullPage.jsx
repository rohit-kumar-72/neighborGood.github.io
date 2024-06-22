import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SideBar from '../components/Home/sidebar/SideBar';
import { getNews } from '../services/operations/newsData';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setStarredNews } from '../slices/newsSlice';
import { FaRegStar } from "react-icons/fa";

function FullPage() {
    const { allNewsId } = useParams();
    const [news, setNews] = useState(null);
    const [allNews, setAllNews] = useState([]);
    const navigate = useNavigate()
    const { loading, starredNews } = useSelector((state) => state.news);
    const dispatch = useDispatch();
    const [isStarred, setIsStarred] = useState(false)

    useEffect(() => {
        // fetching all news from api to get our clicked post
        dispatch(setLoading(true))
        async function fetchWorldNews() {
            let data = await getNews("World");
            if (data) {
                // console.log(data)
                const filteredNews = data.filter((news) => news.content !== "[Removed]" && news.urlToImage != null && news.source.id != null);
                setAllNews(filteredNews);
                const selectedNews = data.find((news) => news.title === allNewsId);
                console.log(selectedNews)
                setNews(selectedNews);
            }
        }
        fetchWorldNews();
        dispatch(setLoading(false))


    }, [allNewsId]);

    useEffect(() => {
        // setting is post starred by user or not

        if (news) {
            console.log("news", news)
            const isPresent = starredNews.filter((item) => item.title === news.title)[0];
            // console.log(isPresent)
            if (isPresent) {
                setIsStarred(true)
            }
        }
    }, [allNews])


    // this function will handle starred post
    async function handleStar(e) {
        await setIsStarred(!isStarred)
        if (!isStarred) {
            // console.log(isStarred)
            // console.log("star")
            const prevData = starredNews;
            const newData = [...starredNews, news];
            dispatch(setStarredNews(newData))
        } else {
            // console.log("unstar")
            // console.log("starredNews", starredNews)
            const prevData = starredNews;
            const newData = starredNews.filter((item) => item.title != news.title);
            dispatch(setStarredNews(newData));
            console.log("starredNews", starredNews)
        }
    }

    return (

        <>
            {
                loading
                    ? <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                        <img src={"/loader.gif"} alt="loader" width={"300px"} />
                        <h2 style={{ marginTop: "-50px" }}>Loading...</h2>
                    </div>
                    : <div>
                        {news ? (
                            <div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap-reverse" }}>
                                    <h1 className='heading-name'>
                                        Neighbor <span className='heading-second'>Good</span>
                                    </h1>
                                    <img
                                        src="https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Fd21112dc-736f-4db3-959a-6304909957dc%2FLogo_green_png.png?table=block&id=b12625b9-cb25-4feb-96fb-fe5162121c4d&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=250&userId=&cache=v2"
                                        style={{ border: "#fff", height: '150px' }}
                                        className="img-thumbnail"
                                        alt="..."
                                    />
                                </div>
                                <Navbar />

                                <div className="fullMain">
                                    <div className="fullLeft">
                                        <div className="leftHeading">
                                            <h1>{news.title}</h1>
                                        </div>
                                        <div className="leftUtility">
                                            <div className="leftAuthor">
                                                By {news?.author}
                                            </div>
                                            <div className="leftStar" onClick={handleStar}>
                                                <FaRegStar style={{ backgroundColor: (isStarred ? "yellow" : "white"), fontSize: "16px" }} />
                                            </div>
                                        </div>
                                        <div className="leftImage">
                                            <img src={news.urlToImage} alt="PostImage" />
                                        </div>
                                        <div className="leftContent">
                                            <p>{news.description}</p>
                                            <p>{news.content}</p>
                                        </div>
                                        <div className="leftVisit">
                                            <Link to={news?.url} >Visit to Read More</Link>
                                        </div>
                                    </div>
                                    <div className="fullRight">
                                        <SideBar />
                                    </div>
                                </div>

                                <Footer />
                            </div>
                        ) : (
                            <>
                                <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <img src={"/loader.gif"} alt="loader" width={"300px"} />
                                    <h2 style={{ marginTop: "-50px" }}>Loading...</h2>
                                </div>
                                {/* <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}><h2>No data found</h2></div> */}
                            </>
                        )}
                    </div>
            }
        </>

    );
}

export default FullPage;
