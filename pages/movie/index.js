import Card from "../../components/movie/card/card";
import Header from "../../components/header/header";
import Layout from '../../components/layout'
import Container from '../../components/container/container'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Section from "../../components/home/section/section";
import { useState, useEffect } from "react";
import Head from "next/head";

const links = {
  'Movie': '/movie/movie',
  'TV': '/movie/tv'
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.TMDB_KEY}`
  );
  const data = await response.json();
  return {
    props: {
      data: data.results,
    },
  };
}


const Movie = ({data}) => {
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('MOVIE_WATCHLIST', []);
    setWatchList(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MOVIE_WATCHLIST', JSON.stringify(watchlist));
  }, [watchlist]);

  const inWatchList = (id) => {
    return watchlist?.some(x => x.id === id);
  }

  const addToWatchList = (e, data) => {
    e.preventDefault();

    if (inWatchList(data.id)) {
      setWatchList(watchlist.filter(x => x.id !== data.id))
    } else {
      setWatchList([...watchlist, data])
    }
  }

    return (
      <Layout>
        <Head>
          <title>Movie</title>
        </Head>

        <Header links={links} />

        <Container>

          <Section>
            <h2 className='text-2xl border-b-4 mb-4 border-white'>Trending</h2>

            <Swiper
                modules={[Navigation, A11y, Scrollbar]}
                spaceBetween={15}
                slidesPerView={4}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next'
                }}
                scrollbar={{ draggable: true }}
                className='w-full !pb-4'
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="!h-auto">
                        <Card data={item} addToWatchList={addToWatchList} inWatchList={inWatchList(item.id)} />
                    </SwiperSlide>
                ))}
              <button className="swiper-button-prev"></button>
              <button className="swiper-button-next"></button>
            </Swiper>
          </Section>
        </Container>
      </Layout>
    );
};

export default Movie