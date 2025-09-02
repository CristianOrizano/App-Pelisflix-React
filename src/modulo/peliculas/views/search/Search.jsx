/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useSearchMulti from "../../application/useSearchMulti";
import Loading from "../../../../core/componentes/Loading";

const Search = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const { query } = useParams();

  const { data: dataSearch, isFetching: isFetchingMovies } = useSearchMulti(
    currentPage,
    query
  );
  const detalle = (id, tipo) => {
    navigate(`/detalle/${id}/${tipo}`);
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
          dataSearch.results.map(
            (item, index) =>
              item.poster_path && (
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
                      <h6
                        className="card-title text-center"
                        style={{
                          color: "#dee2e6",
                          width: "100%",
                          display: "-webkit-box",
                          WebkitLineClamp: 2, // máximo 2 líneas
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "normal",
                        }}
                      >
                        {item.title ? item.title : item.name}
                      </h6>

                      <button
                        type="submit"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => detalle(item.id, item.media_type)}
                      >
                        Ver Detalle
                      </button>
                    </div>
                  </div>
                </div>
              )
          )
        )}
      </div>
    </>
  );
};

export default Search;
