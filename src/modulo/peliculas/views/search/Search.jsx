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
  const detalle = (id,tipo) => {
   
    navigate(`/detalle/${id}/${tipo}`);
  };


  return (
    <>
      <div
        className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 justify-content-md-center mx-5"
        style={{ "margin-top": 80 }}
      >
        {isFetchingMovies
          ? <Loading />
          : dataSearch.results.map(
              (item, index) =>
                item.poster_path && (
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
                          {item.title ? item.title : item.name
}
                        </h5>

                        <button
                          type="submit"
                          className="btn btn-outline-secondary"
                          onClick={()=>detalle(item.id,item.media_type)}
                        >
                          Ver Detalle
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
      </div>
    </>
  );
};

export default Search;
