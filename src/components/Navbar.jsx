import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../componentes/navbar.css";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    function deleteFavorite(item) {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: item
        });
    }

    return (
        <>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-12 d-flex justify-content-between align-items-start p-0">
                        <div className="d-flex align-items-center gap-2 mt-4">
                            <i className="fa-brands fa-tiktok mx-1 i-grande"></i>
                            <i className="fa-brands fa-instagram m-1 i-grande"></i>
                            <i className="fa-brands fa-x-twitter mx-1 i-grande"></i>
                            <i className="fa-brands fa-facebook mx-2 i-grande"></i>
                            <i className="fa-brands fa-youtube mx-2 i-grande border-end pe-3"></i>
                            <button className="btn-kids rounded-3 ms-1">KIDS</button>
                        </div>
                        <div>
                            <Link to="/">
                                <img className="logo" src="https://infonegocios.info/content/images/2023/10/24/415577/conversions/star-wars-impactmkt-medium-size.jpg" alt="star Wars" />
                            </Link>
                        </div>
                        <div className="d-flex mt-4">
                            <span className="d-flex me-4">
                                <i className="fa-solid fa-magnifying-glass me-2 i-grande"></i>
                                <p>SEARCH</p>
                            </span>
                            <i className="fa-regular fa-user me-2 i-grande"></i>
                            <p>LOG IN</p>
                            <ul className="sin-estilo">
                                <li className="nav-item dropdown m-0" >
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        FAVORITOS {store.favorites.length}
                                    </a>
                                    <ul className="dropdown-menu sub-menu">
                                        {store.favorites.length === 0 ? (
                                            <li className="dropdown-item text-white ps-0 bg-transparent">No favorites yet</li>
                                        ) : (
                                            store.favorites.map((item) => {
                                                return (
                                                    <li key={`${item.uid}-${item.type}`} className="d-flex justify-content-between pe-3 ">
                                                        <a className="dropdown-item text-white ps-0 bg-transparent" href="#">{item.name}</a>
                                                        <i
                                                            className="fa-solid fa-trash py-1"
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => deleteFavorite(item)}>
                                                        </i>
                                                    </li>
                                                )
                                            })
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid border-bottom border-dark">
                <div className="col-12 d-flex justify-content-center">
                    <nav >
                        <ul className="d-flex sin-estilo mb-0 ">
                            <li className="menus p-0">
                                <a href="#">NEWS + FEATURES</a>
                                <ul className="sub-menu sin-estilo">
                                    <li><a href="#">THE LATEST</a></li>
                                    <li><a href="#">ANDOR</a></li>
                                    <li><a href="#">QUIZZES + POLLS</a></li>
                                    <li><a href="#">BOCKS + COMICS</a></li>
                                </ul>
                            </li>
                            <li className="menus mx-5">
                                <a href="">VIDEO</a>
                            </li>
                            <li className="menus mx-4">
                                <a href="">FILMS</a>
                            </li>
                            <li className="menus mx-4">
                                <a href="#">SERIES</a>
                                <ul className="sub-menu sin-estilo">
                                    <li><a href="#">ALL SERIES</a></li>
                                    <li><a href="#">ANDOR</a></li>
                                    <li><a href="#">AHSOKA</a></li>
                                    <li><a href="#">THE MANDALORIAN</a></li>
                                </ul>
                            </li>
                            <li className="menus mx-4">
                                <a href="#">GAMES + INTERACTIVE</a>
                                <ul className="sub-menu sin-estilo">
                                    <li><a href="#">VIEW ALL</a></li>
                                    <li><a href="#">STAR WARS OUTLAWS</a></li>
                                    <li><a href="#">AHSOKA</a></li>
                                    <li><a href="#">VR + IMMERSIVE</a></li>
                                </ul>
                            </li>
                            <li className="menus mx-4">
                                <a href="#">DATABANK</a>
                                <ul className="sub-menu sin-estilo">
                                    <li><a href="#">ALL DATABANK</a></li>
                                    <li><a href="#">GALAXY MAP</a></li>
                                    <li><a href="#">ERAS</a></li>
                                </ul>
                            </li>
                            <li className="menus mx-4">
                                <a href="#">DISNEY +</a>
                                <ul className="sub-menu sin-estilo">
                                    <li><a href="#">STREAM NOW</a></li>
                                    <li><a href="#">EXPLORE</a></li>
                                    <li><a href="#">THE DISNEY BUNDLE</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="container-fluid">
                <button className="btn-disney bg-black text-white border border-0 my-2 mx-5 letra-pequena">STAR WARS ON DISNEY+</button>
            </div>
            <div className="search container-fluid  p-2">
                <div className="input-group mb-3 align-items-center bg-dark rounded ">
                    <input type="text" className="form-control fs-3 border border-0 bg-dark p-2 text-white"
                        placeholder="Search Databank"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <span ><i className="fa-solid fa-magnifying-glass me-3"></i></span>
                    <span className="me-4 p-2" id="basic-addon2">SEARCH</span>
                </div>
            </div>
        </>
    )
};