import  { useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill, BsCaretLeftFill,BsCaretRightFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { movieData } from "../../../Data/movieData";

import { FaHeart } from "react-icons/fa";
import Rating from "../Rating";
function TopRatedMovies() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);
  const className ="hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-submain text-white"
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={{ delay: 4000 }}
          speed={1000}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
        >
          {movieData.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={`/images/movies/${movie.titleImage}`}
                  alt={movie.titleImage}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 hovers  gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-12 h-12 flex-colo transitions hover:bg-submain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-xl trancuted line-clamp-2"
                    to={`/movie/${movie.name}`}
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rate}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={className} ref={(node)=>setPrevtEl(node)}>
            <BsCaretLeftFill/>
          </button>
          <button className={className} ref={(node)=>setNextEl(node)}>
            <BsCaretRightFill/>
          </button>

        </div>
      </div>
    </div>
  );
}

export default TopRatedMovies;
