import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    console.log('news ==================', news)
    return (
        <div>
            <h1>Total {news.length}</h1>
        </div>
    );
};

export default News;