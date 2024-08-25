import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeadlineDetail.css';

const HeadlineDetail = ({ headline }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (headline) {
            setLoading(false);
        } else {
            setError('Article not found');
        }
    }, [headline]);

    if (loading) {
        return <div className="loading">Loading article...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="headline-detail-card">
            <h1 className="headline-title">{headline.title}</h1>
            <div className="headline-meta">
                <span className="headline-author">By {headline.author || 'Unknown'}</span>
                {' | '}
                <span className="headline-source">{headline.source.name}</span>
                {' | '}
                <span className="headline-date">{new Date(headline.publishedAt).toLocaleDateString()}</span>
            </div>
            <img src={headline.urlToImage || 'https://via.placeholder.com/300'} alt={headline.title} className="headline-image" />
            <p className="headline-description">{headline.description}</p>
            <button className="back-button" onClick={() => navigate(-1)}>Back to Headlines</button>
        </div>
    );
};

export default HeadlineDetail;
