import React from 'react';
import image from '../assets/NBNWImage.png';
import './NewsItems.css'
const NewsItems = ({title, publishedAt,src, url, sourceName }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div class="news-card">
          <img src={src?src:image} style={{height:"320px"}} alt="News article image" class="news-card-image"/>
          <div class="news-card-content">
            <h3 class="news-card-title"><u>{title}</u></h3>
            <p class="news-card-excerpt">Date: {publishedAt?publishedAt.slice(0,10):"Loading ..."}</p>
            <p className="card-text">Source: {sourceName}</p>
            <a href={url} class="news-card-link">Read more</a>
          </div>
        </div>
      </div>
    </>
  )
}


export default NewsItems;