import Link from "next/link";
import Moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Card = ({ data, addToWatchList, inWatchList }) => {
    const title = data.title ? data.title : data.name;
    const date = data.release_date ? Moment(data.release_date) : Moment(data.first_air_date);

    return (
        <div className="h-full rounded-md overflow-hidden bg-gray-700">
          <Link
              href={{pathname: `movie/${data.media_type}/[id]`, query: { id: data.id }}}
              title={title}
          >
              <div className="relative">
                <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} />
                <p className="absolute top-1.5 right-1.5 bg-gray-700 rounded-md aspect-square text-sm w-8 grid place-items-center drop-shadow-lg font-semibold">{ data.vote_average.toFixed(1) }</p>
                <button onClick={e => addToWatchList(e, data)} className={"absolute bottom-1.5 right-1.5 w-6 p-1 rounded-full border-2" + (inWatchList ? " text-amber-400 border-amber-400" : " border-white")}><FontAwesomeIcon icon={faStar} /></button>
              </div>
              <div className="px-4 py-3">
                  <h3 className="leading-tight mb-1">
                      {title}
                  </h3>
                  <p className="text-sm">{ date.format('Do MMMM YYYY') }</p>
              </div>
          </Link>
        </div>
    );
  };
  
export default Card;
  