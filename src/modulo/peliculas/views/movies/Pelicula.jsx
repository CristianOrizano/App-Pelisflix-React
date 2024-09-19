import { useState } from "react";
import useListMoviesPopular from "../../application/useListMoviesPopular";
import { useNavigate } from "react-router";
import Loading from "../../../../core/componentes/Loading";

const Peliculas = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  //
  // hooks - API
  const { data: dataMoviesPopular, isFetching: isFetchingMovies } =
    useListMoviesPopular(currentPage);
  // -------
  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    setCurrentPage(pageNumber);
  };

  const detalle = (id) => {
   
    navigate(`/detalle/${id}/${"movie"}`);
  };

  return (
    <>
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 justify-content-md-center mx-5"
        style={{ "margin-top": 80 }}
      >
        {isFetchingMovies
          ? <Loading />
          : dataMoviesPopular.results.map((item, index) => (
              <div key={index} className="col mb-3">
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div
                    className="card-body d-flex flex-column align-items-center justify-content-center "
                    style={{ background: "black" }}
                  >
                    <h5 className="card-title text-center text-white ">
                      {item.title}
                    </h5>
                    <button type="submit" className="btn btn-outline-secondary"
                    onClick={()=>detalle(item.id)}>
                      Ver Detalle
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="d-flex justify-content-center m-3">
        <button
          className="btn btn-dark me-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-backward m-1"></i>
          Back
        </button>
        <button
          className="btn btn-dark"
          onClick={() => handlePageChange(currentPage + 1)}
          type="submit"
        >
          <i className="fa-solid fa-forward m-1"></i>
          Next
        </button>
      </div>
    </>
  );
};

export default Peliculas;