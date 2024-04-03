/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import useDetalleMovie from "../../application/useDetalleMovie";
import useListRepartoMovie from "../../application/useListRepartoMovie";
import { useEffect, useState } from "react";

const Detalle = () => {
  const { id, tipo } = useParams();

  //hooks
  const [idMovieSerie, setIdMovieSerie] = useState(1);
  const [tipoMovieSerie, setTipoMovieSerie] = useState("tv");
  const [creditos, setCredito] = useState("credits");

  // hooks-api
  const { data: dataDetalle, isFetching: isFetchingMovies } = useDetalleMovie(
    idMovieSerie,
    tipoMovieSerie
  );
  const { data: dataReparto, isFetching: isFetchingReparto } =
    useListRepartoMovie(idMovieSerie,tipoMovieSerie,creditos);
  // ---------

  console.log("type", tipo);

  useEffect(() => {
    if (tipo == "movie") {
      setIdMovieSerie(id);
      setTipoMovieSerie(tipo);
      setCredito("credits");
    } else {
      setIdMovieSerie(id);
      setTipoMovieSerie("tv");
      setCredito("aggregate_credits");
    }
  }, []);

  const primerosSeisResultados = dataReparto?.cast.slice(0, 6);

  console.log("primeros 6==>", primerosSeisResultados);

  console.log("img==>", dataDetalle?.poster_path);
  const genresString = dataDetalle
    ? dataDetalle.genres.map((genre) => genre.name).join(", ")
    : "";

  //Duracion
  const runtimeMinutes = dataDetalle?.runtime;
  const hours = Math.floor(runtimeMinutes / 60);
  const minutes = runtimeMinutes % 60;
  const runtimeString = `${hours}h ${minutes}m`;

  //anio de lanzamiento
  const releaseDate = dataDetalle?.release_date
    ? dataDetalle?.release_date
    : dataDetalle?.first_air_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "";
  return (
    <>
      {isFetchingMovies ? (
        "cargando"
      ) : (
        <div
          className="container  text-white p-0"
          style={{ "margin-top": 100 }}
        >
          <div className="card  mb-3 opaque-background">
            <div className="row align-items-center ">
              <div className="col-md-4 ">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${dataDetalle?.poster_path}`}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p
                    className="card-title fs-1 fst-italic"
                    style={{ color: "#D0D3D4" }}
                  >
                    <strong>
                      {dataDetalle?.title
                        ? dataDetalle?.title
                        : dataDetalle?.name}{" "}
                    </strong>{" "}
                    ({releaseYear})
                  </p>
                  {runtimeString != "NaNh NaNm" ? (
                    <p className="fs-6 fst-normal">
                      <strong className="dd">Duracion:</strong> {runtimeString}{" "}
                    </p>
                  ) : (
                    ""
                  )}

                  <br></br>
                  <p className="fs-5">
                    <strong className="dd">Género:</strong> {genresString}
                  </p>
                  <p className="fs-6">
                    <strong className="dd">Lanzamiento:</strong>{" "}
                    {dataDetalle?.release_date
                      ? dataDetalle?.release_date
                      : dataDetalle?.first_air_date}
                  </p>
                  <h4>
                    <strong className="dd">Sipnosis</strong>
                  </h4>
                  <p className="card-text">{dataDetalle?.overview}</p>

                  <h4>
                    <strong className="dd"> Reparto Principal </strong>
                  </h4>
                  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4  row-cols-lg-6 ">
                    {isFetchingReparto
                      ? "cargando"
                      : primerosSeisResultados?.map((item, index) => (
                          <div className="col" key={index}>
                            <div className="card bg-dark text-white h-100">
                              <img
                                src={`https://image.tmdb.org/t/p/w1280${item.profile_path}`}
                                className="card-img-top"
                              />
                              <div className="card-body">
                                <p className="card-title fw-bold">
                                  {item.original_name}
                                </p>
                                {item.character != null ?  <p className="card-title ">
                                  ({item.character})
                                </p>:""}
                              

                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detalle;