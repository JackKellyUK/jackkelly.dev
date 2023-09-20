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
import { faPaperPlane, faCode, faLocationArrow, faLink, faDatabase, faUniversalAccess, fa1 } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faJs, faPhp, faSass, faJoomla, faHtml5, faGitAlt, faReact, faDocker, faAws, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'

const submenu = {
  '#home': 'Home',
  '#portfolio': 'Portfolio',
  '#latest': 'Latest',
  '#experience': 'Experience'
}

export default function Index({ preview, allPosts, slides }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className='scroll-smooth'>
      <Layout preview={preview}>
      <Head>
        <title>Jack Kelly | Website Developer</title>
      </Head>

      <Header submenu={submenu} />

      <Container className='pb-24'>
        <Section id='home'>
          <img alt='Jack Kelly' src='JK.webp' className='w-40 rounded-full mb-2' />
          <h1 className='text-3xl'>Jack Kelly</h1>
          <p className='flex'><FontAwesomeIcon className='w-4 mr-2' icon={faCode} />Web Developer</p>
          <p className='flex mb-2'><FontAwesomeIcon className='w-4 mr-2' icon={faLocationArrow} />Bromley, Greater London</p>

          <ul className='flex gap-4'>
            <li className='p-1'><a href='mailto:jack@jackkelly.dev' aria-label='Email' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faPaperPlane} /></a></li>
            <li className='p-1'><a href='https://www.linkedin.com/in/jack-kelly-959224170/' target="_blank" aria-label='LinkedIn' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faLinkedinIn} /></a></li>
            <li className='p-1'><a href='https://github.com/JackKellyUK' target="_blank" aria-label='Github' className="hover:text-gray-300 ease-in-out duration-300"><FontAwesomeIcon className='w-6' icon={faGithub} /></a></li>
          </ul>
        </Section>

        <Section id='portfolio'>
          <h2 className='text-2xl border-b-4 border-white mb-2'>Portfolio</h2>

          <Swiper
            modules={[Navigation, A11y]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next'
            }}
            className='max-w-full'
            loop='true'
          >
            {slides.map((item) => (
              <SwiperSlide 
                key={item.title}
                className='md:px-14'
              >
                <h3 className='text-lg'>{item.title}</h3>
                <p>
                  <Link href={'https://' + item.link} target='_blank' className="break-all hover:text-gray-300 ease-in-out duration-300">
                    <FontAwesomeIcon className='w-4 mr-2 inline-block' icon={faLink} />
                    {item.link}
                  </Link>
                </p>
                <p className='mb-2'>
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
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </Swiper>
        </Section>

        <Section id='latest'>
          <h2 className='text-2xl border-b-4 mb-4 border-white'>Latest</h2>

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
          <h2 className='text-2xl border-b-4 mb-4 border-white'>Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-5 items-start">
              <div className='bg-gray-700 px-4 py-3 rounded-md'>
                <ul className='list-[disclosure-closed] ml-5'>
                  <li className='my-1'>Content Management System driven websites</li>
                  <li className='my-1'>Integration with Management Information Systems</li>
                  <li className='my-1'>Day-to-day client support</li>
                  <li className='my-1'>Accessibility & SEO best practises</li>
                  <li className='my-1'>Improving business workflow</li>
                  <li className='my-1'>Full development lifecycle</li>
                </ul>
              </div>

              <ul className='grid md:grid-cols-2 gap-2.5'>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#e34f26] bg-slate-600' icon={faHtml5} /><span className='py-2'>HTML</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#FFFF00] bg-slate-600' icon={faJs} /><span className='py-2'>Javascript</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#8993be] bg-slate-600' icon={faPhp} /><span className='py-2'>PHP</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#cc6699] bg-slate-600' icon={faSass} /><span className='py-2'>Sass</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#5091CD] bg-slate-600' icon={faJoomla} /><span className='py-2'>Joomla</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-1.5 px-2 mr-4 text-[#f34f29] bg-slate-600' icon={faGitAlt} /><span className='py-2'>Git</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-2 px-2 mr-4 text-[#f90] bg-slate-600' icon={faAws} /><span className='py-2'>AWS</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-2 px-2 mr-4 text-[#00d8ff] bg-slate-600' icon={faReact} /><span className='py-2'>React</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-2 px-2 mr-4 text-[#21759b] bg-slate-600' icon={faWordpress} /><span className='py-2'>Wordpress</span></li>
                <li className='flex overflow-hidden bg-gray-700 rounded-md'><FontAwesomeIcon className='w-10 h-10 py-2 px-2 mr-4 text-[#0db7ed] bg-slate-600' icon={faDocker} /><span className='py-2'>Docker</span></li>
              </ul>
          </div>
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
