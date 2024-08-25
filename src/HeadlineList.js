import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchHeadlines } from './newsService';
import './HeadlineList.css';  // Import the CSS file

const HeadlineList = () => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const getHeadlines = async () => {
            const data = await fetchHeadlines();
            setHeadlines(data);
        };

        getHeadlines();
    }, []);

    return (
        <div className="headline-list">
            {headlines.map((headline, index) => (
                <div key={index} className="headline-item">
                    <h2 className="headline-title">{headline.title}</h2>
                    <p className="headline-author">
                        By {headline.author || 'Unknown'} - {headline.source.name}
                    </p>
                    <p className="headline-date">{new Date(headline.publishedAt).toLocaleDateString()}</p>
                    
                    {/* Flex container for image and description */}
                    <div className="headline-content">
                        <img 
                            src={headline.urlToImage ? headline.urlToImage : 'https://via.placeholder.com/150'} 
                            alt={headline.title || "No image available"} 
                            className="headline-image" 
                        />
                        <p className="headline-description">{headline.description}</p>
                    </div>
                    
                    <Link to={`/headline/${index}`} className="read-more-link">Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default HeadlineList;
