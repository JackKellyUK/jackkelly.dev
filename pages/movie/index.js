import Card from "../../components/movie/card/card";
import Header from "../../components/header/header";
import Layout from '../../components/layout'
import Container from '../../components/container'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const links = {
  'Movie': '/movie/movie',
  'TV': '/movie/tv'
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=2a6ecf76b3a384a6c78b6c57223297d3"
  );
  const data = await response.json();
  return {
    props: {
      data: data.results,
    },
  };
}


const Movie = ({data}) => {
    return (
      <Layout>
        <Container>
          <Header links={links} />

          <h2>Trending</h2>

            <Swiper
                modules={[Navigation, A11y, Scrollbar]}
                spaceBetween={15}
                slidesPerView={6}
                navigation
                scrollbar={{ draggable: true }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
      </Layout>
    );
};

export default Movie