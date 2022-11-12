import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Header from "../components/header/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCode, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const links = {
  'Home': '/',
  'Portfolio': '#portfolio',
  'Experience': '#experience'
}

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
      <Head>
        <title>jackkelly.dev | Website Developer</title>
      </Head>

      <Container>
        <Header links={links}/>
          <section>
            <img src='JK.jpeg' className='w-20 rounded-full' />
            <h1>Jack Kelly</h1>
            <p className='flex'><FontAwesomeIcon className='w-4' icon={faCode} /> Junior Software Developer</p>
            <p className='flex'><FontAwesomeIcon className='w-4' icon={faLocationArrow} /> Bromley, Greater London</p>

            <ul>
              <li><a href='mailto:jack@jackkelly.dev' aria-label='Email'><FontAwesomeIcon className='w-4' icon={faPaperPlane} /></a></li>
              <li><a href='https://www.linkedin.com/in/jack-kelly-959224170/' aria-label='LinkedIn'><FontAwesomeIcon className='w-4' icon={faLinkedinIn} /></a></li>
              <li><a href='https://github.com/JackKellyUK' aria-label='Github'><FontAwesomeIcon className='w-4' icon={faGithub} /></a></li>
            </ul>
          </section>

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
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
