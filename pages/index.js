
import Container from '../components/container/container'
import Section from '../components/home/section/section'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Header from "../components/header/header"
import ContentfulImage from '../components/contentful-image'
import { getAllPostsForHome, getSlides } from '../lib/api'
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCode, faLocationArrow, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'

export default function Index({ preview, allPosts, slides }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <div className='scroll-smooth'>
      <Layout preview={preview}>
      <Head>
        <title>Jack Kelly | Website Developer</title>
      </Head>

      <Header/>

      <Container className='pb-24'>
        <Section id='home'>
          <img src='JK.jpeg' className='w-40 rounded-full mb-2' />
          <h1 className='text-3xl font-semibold'>Jack Kelly</h1>
          <p className='flex'><FontAwesomeIcon className='w-4 mr-2' icon={faCode} />Software Developer</p>
          <p className='flex mb-2'><FontAwesomeIcon className='w-4 mr-2' icon={faLocationArrow} />Bromley, Greater London</p>

          <ul className='flex gap-4'>
            <li className='p-1'><a href='mailto:jack@jackkelly.dev' aria-label='Email' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faPaperPlane} /></a></li>
            <li className='p-1'><a href='https://www.linkedin.com/in/jack-kelly-959224170/' target="_blank" aria-label='LinkedIn' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faLinkedinIn} /></a></li>
            <li className='p-1'><a href='https://github.com/JackKellyUK' target="_blank" aria-label='Github' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faGithub} /></a></li>
          </ul>
        </Section>

        <Section id='portfolio'>
          <h2 className='text-2xl font-semibold border-b-4 border-white mb-2'>Portfolio</h2>

          <Swiper
            modules={[Navigation, A11y]}
            navigation
            className='max-w-full'
            loop='true'
          >
            {slides.map((item) => (
              <SwiperSlide 
                key={item.id}
                className='px-14'
              >
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p>
                  <Link href={'https://' + item.link} target='_blank' className="hover:text-gray-300 ease-in-out duration-300">
                    <FontAwesomeIcon className='w-4 mr-2 inline-block' icon={faLink} />
                    {item.link}
                  </Link>
                </p>
                <p className='mb-4'>
                  <FontAwesomeIcon className='w-4 mr-2 inline-block' icon={faCode} />
                  {item.type}
                </p>
                <ContentfulImage 
                  src={item.image.url}
                  alt={`Cover Image for ${item.title}`}
                  width={900}
                  height={500}
                  layout='raw'
                  />
              </SwiperSlide>
            ))}
          </Swiper>
        </Section>

        <Section id='blog'>
          <h2 className='text-2xl font-semibold border-b-4 mb-4 border-white'>Blog</h2>

          <div className='grid md:grid-cols-2 gap-5'>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </Section>

        <Section id='experience'>
          <h2 className='text-2xl font-semibold border-b-4 mb-4 border-white'>Experience</h2>
        </Section>
      </Container>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const slides = (await getSlides(preview)) ?? []
  
  return {
    props: { preview, allPosts, slides },
  }
}
