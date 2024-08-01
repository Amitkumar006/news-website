import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems'; // Assuming you have a component for rendering news items
import Spin from './SpinnerLoading';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState([true])
    const [page, setPage] = useState([1])
    const [totalResults, setTotalResults] = useState([0])
    

    const capitalize = (data) => {
        return data.charAt(0).toUpperCase() + data.slice(1)
    }

    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=2c24a39c0e844b149a12e21e85856cca`;
        let data = await fetch(url);
        setLoading(true)
        let parsedData = await data.json();
        console.log(parsedData);
        setLoading(false)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }

   useEffect(() => {
        updateNews();
          document.title = `${capitalize(props.category)} - newsFast`
    }, [])

    // const handlePreviousClick = async () => {
    //     setPage(page - 1)
    //     updateNews()
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }



    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=2c24a39c0e844b149a12e21e85856cca`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <>

            <h2 className='text-center' style={{marginTop: "80px"}}>newsFast - top {capitalize(props.category)} headlines</h2>
            {loading && <Spin />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4><Spin /></h4>}>

                <div className='container'>
                    <div className="row my-4">
                        {articles.map((element, index) => (
                            <div className="col-md-4" key={index}>
                                <NewsItems
                                    title={element.title ? element.title.slice(0, 30) : ""}
                                    description={element.description ? element.description.slice(0, 85) : ""}
                                    imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/thumb/msid-111800206,width-1070,height-580,imgsize-39412,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"}
                                    url={element.url}
                                    date={element.publishedAt}
                                    author={element.author}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll >

            {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                <button type="button" disabled={page + 1 > Math.ceil(totalResults / 20)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
        </>
    );
}

export default News
