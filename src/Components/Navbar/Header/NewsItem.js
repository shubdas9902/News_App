import React from 'react'

const NewsItem = ({ title, description, urlToImage, newsUrl, author, date ,source}) => {
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1", marginTop:"20px", marginRight:"10px"}}>
          {source}
        </span>
        <img src={!urlToImage ? "https://i3.wp.com/wallpapers.com/images/hd/aesthetic-nature-16zsjyy12224wwc2.jpg?ssl=1" : urlToImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem