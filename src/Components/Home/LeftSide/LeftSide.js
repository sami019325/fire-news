import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div >
            <h1>All Categories</h1>
            {
                Categories.map(categs =>
                    <p className=' rounded-sm border-b p-2 font-bold hover:bg-slate-500 text-left' key={categs.id}>
                        <Link to={`/category/${categs.id}`}>{categs.name}</Link>
                    </p>
                )
            }
        </div>
    );
};

export default LeftSide;