import React from 'react';
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Rght = () => {
    return (
        <div >
            <div>
                <button className="btn btn-wide m-2">Continue with Facebook <FaFacebook className='ml-2' /></button>
                <button className="btn btn-wide m-2">Continue with google <FaGoogle className='ml-2'></FaGoogle> </button>
            </div>
            <div>
                <div className='flex items-center gap-3 font-bold border m-3 rounded-lg border-slate-600 p-3'>
                    <FaFacebook /> <p>Find us on Facebook</p>
                </div>
                <div className='flex items-center gap-3 font-bold border m-3 rounded-lg border-slate-600 p-3'>
                    <FaInstagram /> <p>Find us on Instagram</p>
                </div>
                <div className='flex items-center gap-3 font-bold border m-3 rounded-lg border-slate-600 p-3'>
                    <FaTwitter />  <p>Find us on Twitter</p>
                </div>
            </div>
            {/* Carousel */}

            <div className="carousel w-full h-40 mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rght;