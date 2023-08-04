import React, { useEffect, useState } from 'react'
import NewsIteam from './NewsIteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [status, setStatus] = useState("error")
    const [article, setArticle] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(60);
        parsedData.status === 'ok' && setArticle(parsedData.articles);
        setTotal(parsedData.totalResults);
        setStatus("ok");
        setLoading(false);
        document.title = capitalize(props.category) + " News-Monkey";
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle(article.concat(parsedData.articles)); 
    }

    return (
        <>
            <h2 className='my-3 text-center' style={{marginTop:"10px"}}><strong>Top HeadLines for {capitalize(props.category)}</strong></h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length  < total}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='container my-5'>
                    <div className="row">
                        {status==='ok' && article.map((element, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsIteam
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://www.livemint.com/lm-img/img/2023/07/31/600x338/Noise_ColorFit_Thrive_1690796692698_1690796709413.png"}
                                        newsUrl={element.url ? element.url : "https://www.hindustantimes.com/india-news/indias-anju-gets-land-gifts-for-converting-to-islam-from-pak-businessman-101690638459029.html"}
                                        author={element.author ? element.author : "unknown"}
                                        date={element.publishedAt ? element.publishedAt : ""}
                                        source={element.source.name ? element.source.name : ""}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    apiKey: "4647b57c29db4109adb81c5683bed540",
    category: "general"
};
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string
};