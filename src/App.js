import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeadlineList from './HeadlineList';
import HeadlineDetail from './HeadlineDetail';
import { fetchHeadlines } from './newsService';

const App = () => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const getHeadlines = async () => {
            const data = await fetchHeadlines();
            setHeadlines(data);
        };

        getHeadlines();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HeadlineList />} />
                <Route path="/headline/:id" element={<HeadlineDetail headlines={headlines} />} />
            </Routes>
        </Router>
    );
};

export default App;
