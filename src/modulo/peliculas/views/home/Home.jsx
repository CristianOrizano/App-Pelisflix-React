import { useEffect, useState } from "react";
import useListMoviesPopular from "../../application/useListMoviesPopular";

const Home = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const { data: dataMoviesPopular } = useListMoviesPopular();

  const fetchData = async () => {
    try {
      if (dataMoviesPopular && dataMoviesPopular.results.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * dataMoviesPopular.results.length
        );
        const randomMovieData = dataMoviesPopular.results[randomIndex];
        setRandomMovie(randomMovieData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataMoviesPopular]);

  console.log("randomMov", randomMovie);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${randomMovie?.backdrop_path})`,
        }}
      >
        {randomMovie && (
          <>
           
            <div className="banner-overlay">
            <div className="banner-content"> 
              <h1 className="fw-bold">{randomMovie.title}</h1>
              <p>{randomMovie.overview}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;