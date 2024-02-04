import Container from '../../components/container/container'
import Section from '../../components/home/section/section'
import Layout from '../../components/layout'
import Header from "../../components/header/header"
import Head from 'next/head'
import Link from 'next/link'

export default function Index({preview}) {

  return (
    <div className='scroll-smooth'>
      <Layout preview={preview}>
      <Head>
        <title>Jack Kelly | Website Developer</title>
      </Head>

      <Header />

      <Container className='pb-24'>
        <Section id='latest'>
          <h1 className='text-2xl border-b-4 mb-4 border-white'>Tools</h1>

          <div className='grid md:grid-cols-2 gap-5'>
            <Link href='/tools/pseudo-element-recolour' className='bg-slate-600 px-4 py-3 rounded-md hover:bg-gray-700 transition-bg ease-in-out duration-300'>
              <h2 className='text-xl mb-2'>Pseudo element recolour</h2>
              <p className='text-sm'>Allows you to recolour the content attribute of a pseudo element - useful for SVGs</p>
            </Link>

            <Link href='/tools/chmod-calculator' className='bg-slate-600 px-4 py-3 rounded-md hover:bg-gray-700 transition-bg ease-in-out duration-300'>
              <h2 className='text-xl mb-2'>Chmod calculator</h2>
              <p className='text-sm'>A calculator to convert Linux file permissions between different formats</p>
            </Link>
          </div>
        </Section>
      </Container>
      </Layout>
    </div>
  )
}

