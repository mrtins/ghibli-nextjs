import MovieCard from '@components/MovieCard/MovieCard';
import type { NextPage } from 'next';
import Head from 'next/head';

export async function getServerSideProps() {
  const res = await fetch(`https://ghibliapi.herokuapp.com/films?limit=250`);
  const data = await res.json();

  return { props: { movieList: data } };
}

const Home: NextPage = ({ movieList }: any) => {
  console.log({ movieList });
  return (
    <>
      <Head>
        <title>NextJs Ghibli</title>
      </Head>

      <main className="container p-5 mx-auto">
        <h1 className="text-4xl text-center mb-8">Movies</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {movieList.map((movie) => (
            <MovieCard key={movie.title} name={movie.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
