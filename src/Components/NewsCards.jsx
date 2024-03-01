import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import './NewsCards.css';
// Aditya Vijay Patil
const NewsCards = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=61e76a07e08944c283d2b1f1a4f5c889`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }

                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                setError(
                    <div class="alert alert-danger d-flex align-items-center" role="alert">
                      <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                      <div className='alert1'>
                          Oops! Something went wrong. Please try again later.
                      </div>
                    </div>
                  );
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div className="body">
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                articles.map((news, index) => (
                    <NewsItems
                        key={index}
                        title={news.title}
                        publishedAt={news.publishedAt}
                        src={news.urlToImage}
                        url={news.url}
                        sourceName={news.source?.name}
                    />
                ))
            )}
        </div>
    );
};

export default NewsCards;
