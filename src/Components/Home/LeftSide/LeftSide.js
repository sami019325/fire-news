import React, { useEffect, useState } from 'react';

const LeftSide = () => {
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div >
            <h1>All Categories</h1>
            {
                Categories.map(categs =>
                    <p className=' rounded-sm border-b p-2 font-bold hover:bg-slate-500 text-left' key={categs.id}>{categs.name}</p>
                )
            }
        </div>
    );
};

export default LeftSide;