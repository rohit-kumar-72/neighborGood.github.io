import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FullPage from './pages/FullPage';
import { getAllCategoryNews } from './services/operations/newsData';
import Category from './components/Home/category/Category';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from './slices/newsSlice';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [sports, setSports] = useState([]);
  const [business, setBusiness] = useState([]);
  const [general, setGeneral] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const { loading, starredNews } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setLoading(true))
    async function fetchData() {
      const data = await getAllCategoryNews();
      if (data) {
        setAllNews(data);
      }
    }
    fetchData();
    if (business)
      dispatch(setLoading(false))
  }, []);

  useEffect(() => {
    if (allNews) {
      dispatch(setLoading(true))
      setGeneral(allNews.filter((news) => news.category === "general"));
      setBusiness(allNews.filter((news) => news.category === 'general'));
      setSports(allNews.filter((news) => news.category === 'sports'));
      setEntertainment(allNews.filter((news) => news.category === 'entertainment'));
      setTechnology(allNews.filter((news) => news.category === 'technology'));
      dispatch(setLoading(false))
    }
  }, [allNews]);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home general={general} technology={technology} sports={sports} business={business} entertainment={entertainment} />}
        />
        <Route
          path='allnews/:allNewsId'
          element={<FullPage />}
        />
        <Route
          path='/sports'
          element={
            <Category allNews={sports} />
          }
        />
        <Route
          path='/entertainment'
          element={
            <Category allNews={entertainment} />
          }
        />
        <Route
          path='/technology'
          element={
            <Category allNews={technology} />
          }
        />
        <Route
          path={"/business"}
          element={
            <Category allNews={business} />
          }
        />
        <Route
          path={"/general"}
          element={
            <Category allNews={general.slice(0, 10)} />
          }
        />
        <Route
          path={"/starred-news"}
          element={
            <Category allNews={starredNews} />
          }
        />

        <Route
          path='/loading'
          element={<div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <img src={"/loader.gif"} alt="loader" width={"300px"} />
            <h2 style={{ marginTop: "-50px" }}>Loading...</h2>
          </div>
          }

        />

        <Route
          path='*'
          element={<h1>Nothing is good.</h1>}
        />
      </Routes >
    </>
  );
}

export default App;
