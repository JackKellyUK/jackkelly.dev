import Container from '../../components/container/container'
import Section from '../../components/home/section/section'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import Header from "../../components/header/header"
import { getAllPostsForHome, getSlides } from '../../lib/api'
import Head from 'next/head'

import 'swiper/css';
import 'swiper/css/navigation';

export default function Index({ preview, allPosts, slides }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <div className='scroll-smooth'>
      <Layout preview={preview}>
      <Head>
        <title>Jack Kelly | Website Developer</title>
      </Head>

      <Header />

      <Container className='pb-24'>

        <Section id='latest'>
          <h2 className='text-2xl border-b-4 mb-4 border-white'>Blog</h2>

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
