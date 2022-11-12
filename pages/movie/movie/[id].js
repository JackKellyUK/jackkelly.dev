
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
        <div>
            <h1>{data.title}</h1>
        </div>
    );
};

export default MovieItem;