import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            Today's total fire news {allNews.length}

            {
                allNews.map(news => {
                    return (
                        <div className='border rounded-lg border-sky-200 m-2 p-3'>
                            <img src={news.image_url} alt="" srcset="" />
                            <h1 className='text-xl text-black'>{news.title}</h1>
                            <hr />
                            <p>Author: {news.author.name ? news.author.name : 'Unknown author'}</p>
                            <div className='flex gap-8 border border-slate-600 rounded-full w-56 px-4 hover:bg-slate-400'>
                                <p>Ratings: {news.rating.number}</p>
                                <p>Views: {news.total_view}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default Home;