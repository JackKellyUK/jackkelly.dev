import Container from "../../../components/container/container";
import Head from 'next/head'
import Header from "../../../components/header/header";
import Section from "../../../components/home/section/section";
import Layout from "../../../components/layout";

export async function getServerSideProps(item) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${item.params.id}?api_key=2a6ecf76b3a384a6c78b6c57223297d3`
    );
    const data = await response.json();

    return {
        props: { 
            data
        },
    };
}
  

const MovieItem = ({data}) => {
    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>

            <Header />

            <Container>
                <Section>
                    <h1 className="text-4xl tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">{data.title}</h1>
                </Section>
            </Container>
        </Layout>
    );
};

export default MovieItem;