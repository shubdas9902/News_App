import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ pageSize, country, category,apikey }) => {

  const [articles, setArticle] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  // let articles = [{
  //   "source": {
  //     "id": "the-times-of-india",
  //     "name": "The Times of India"
  //   },
  //   "author": "TOI Sports Desk",
  //   "title": "'Thank you Ajit Agarkar': KL Rahul brutally roasted for his 33-ball 29 as Sunrisers Hyderabad floor Luckn - The Times of India",
  //   "description": "Cricket News: Recently, KL Rahul was denied a ticket to upcoming T20 World Cup in the Americas as Ajit Agarkar-led selection committee ignored him in the 15-man squ",
  //   "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/thank-you-ajit-agarkar-kl-rahul-brutally-roasted-for-his-33-ball-29-as-sunrisers-hyderabad-floor-lucknow-super-giants/articleshow/109957635.cms",
  //   "urlToImage": "https://static.toiimg.com/thumb/msid-109957648,width-1070,height-580,imgsize-47512,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //   "publishedAt": "2024-05-08T17:09:00Z",
  //   "content": null
  // }]

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setLoading(false)
    settotalResults(parsedData.totalResults)
    setArticle(parsedData.articles)


  }
  useEffect(() => {
    updateNews();
  }, [])

  // const handleNextClick = async () => {
  //   console.log("next")
  //   if (page + 1 > Math.ceil(totalResults / { pageSize })) {

  //   }
  //   else {
  //     // setPage(page + 1)
  //     console.log("page", page)
  //     const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3f83f2331ed240a7af73c9b129501a1c&page=${page + 1}&pageSize=${pageSize}`
  //     setLoading(true)
  //     let data = await fetch(url)
  //     let parsedData = await data.json()
  //     setLoading(false)
  //     setArticle(parsedData.articles)
  //     setPage(page + 1)
  //     console.log("page", page)
  //   }
  // }
  // const handlePrevClick = async () => {
  //   console.log("prev")
  //   console.log(page)
  //   setPage(page - 1)
  //   const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3f83f2331ed240a7af73c9b129501a1c&page=${page - 1}&pageSize=${pageSize}`
  //   setLoading(true)
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   setLoading(false)
  //   setArticle(parsedData.articles)
  //   console.log(page)
  // }
  const fetchMoreData = async() => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`
    
    let data = await fetch(url)
    let parsedData = await data.json()
    settotalResults(parsedData.totalResults)
    setArticle(articles.concat(parsedData.articles))
  };

  return (
    <>
      <h2>The Dispatch-Top Headlines</h2>
      {loading &&<Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className='container'>
        <div className='row ml-3'>
          {articles.map((element) => {
            return (<div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description}
                urlToImage={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>)
          })}

        </div>
        </div>
      </InfiniteScroll>
    
      {/* <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button" class="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / { pageSize })} type="button" class="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div> */}
    </>
  )
}

News.proptype = {
  country: PropTypes.string,
  category: PropTypes.string
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

export default News