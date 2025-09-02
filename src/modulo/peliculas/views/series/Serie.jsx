import { useState } from "react";
import useListSeriesPopular from "../../application/useListSeriesPopular";
import { useNavigate } from "react-router";
import Loading from "../../../../core/componentes/Loading";

const Series = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: dataMoviesPopular, isFetching: isFetchingMovies } =
    useListSeriesPopular(currentPage);

  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    setCurrentPage(pageNumber);
    
  };

  const detalle = (id) => {
    navigate(`/detalle/${id}/${"serie"}`);
  };

  return (
    <>
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 justify-content-md-center mx-2 mx-md-5 px-md-5"
        style={{ "margin-top": 110 }}
      >
        {isFetchingMovies ? (
          <Loading />
        ) : (
          dataMoviesPopular.results.map((item, index) => (
            <div key={index} className="col mb-3">
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w342${item?.poster_path}`}
                  className="card-img-top"
                  alt={item.title}
                
                />
                <div
                  className="card-body d-flex flex-column align-items-center justify-content-between"
                  style={{
                    background: "#000000",
                    height: "120px",
                    overflow: "hidden",
                  }}
                >
                  <h6 className="card-title text-center"
                   style={{
                      color: "#dee2e6",
                      width: "100%",
                      display: "-webkit-box",
                      WebkitLineClamp: 2, // máximo 2 líneas
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal", 
                    }}>
                    {item.name}
                  </h6>
                  <button
                    type="submit"
                     className="btn btn-outline-secondary btn-sm"
                    onClick={() => detalle(item.id)}
                  >
                    Ver Detalle
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
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

export default Series;
