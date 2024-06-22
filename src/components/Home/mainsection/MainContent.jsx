import React, { useEffect, useState } from 'react'
import "./style.css"
import Heading from '../../common/Heading';
import { useNavigate } from 'react-router-dom';
import { SlArrowLeft, SlArrowRight, SlCalender } from "react-icons/sl";
import SideBar from '../sidebar/SideBar';

function MainContent({ allPopularNews, keyword }) {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [popularNews, setPopularNews] = useState([])
    // console.log(allPopularNews)

    useEffect(() => {
        if (keyword && allPopularNews) {
            const keywordNews = allPopularNews.filter((news) => (
                news.title.toLowerCase().includes(keyword.toLowerCase()) || news.description.toLowerCase().includes(keyword.toLowerCase()) || news.source.name.toLowerCase().includes(keyword.toLowerCase()) || news.content.toLowerCase().includes(keyword.toLowerCase())
            ))
            setPopularNews(keywordNews);
        } else if (allPopularNews) {
            setPopularNews(allPopularNews.slice(0, 10))
        }
    }, [allPopularNews, keyword])

    useEffect(() => {
        let initial = 0 + (page - 1) * 10;
        let final = page * 10;
        if (allPopularNews) {
            setPopularNews(allPopularNews.slice(initial, final))
        }
    }, [page, allPopularNews])
    // console.log(allPopularNews, popularNews)
    return (
        <>
            <main>
                <div className="mainContainer">
                    <div className="rightContainer">
                        <Heading title={"Popular"} color={"#fb4c35"} />
                        <div className="popularContainer">
                            {
                                popularNews.map((news, index) => (
                                    <div className="popularBox" key={index} onClick={() => navigate(`allnews/${news.title}`)}>
                                        <div className="popularImage">
                                            <img src={news.urlToImage} alt="thumbnail" />
                                        </div>
                                        <div className="popularContent">
                                            <div className='popularTitle'>
                                                {news.title + " ..."}
                                            </div>
                                            <div className="popularDescription">
                                                {news.description + " ... "}<span className='readmore'>Read More</span>
                                            </div>
                                            <div className="popularTimeStamp">
                                                <SlCalender style={{ fontSize: "16px", color: "#e27839" }} />
                                                {news.publishedAt.split("T")[0]}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {!keyword &&
                            <div className="popularPagination">
                                <button className='popularButton' onClick={() => {
                                    if (page > 1)
                                        setPage(page - 1);

                                }}>
                                    <SlArrowLeft style={{ fontSize: "20px", color: "#fff" }} />
                                    Prev
                                </button>
                                <div className="paginationNumber">
                                    {page} of {Math.ceil(allPopularNews.length / 10)}
                                </div>
                                <button className='popularButton' onClick={() => {
                                    if (page < Math.ceil(allPopularNews.length / 10))
                                        setPage(page + 1);

                                }}>
                                    Next
                                    <SlArrowRight style={{ fontSize: "20px", color: "#fff" }} />
                                </button>
                            </div>}

                    </div>
                    <div className="leftContainer">
                        <SideBar />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainContent