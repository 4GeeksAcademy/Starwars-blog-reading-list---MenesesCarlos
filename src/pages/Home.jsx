import { useEffect, useState } from "react"
import React from "react"
import { Link } from 'react-router-dom'; 
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../componentes/navbar.css";   
import "../personajes.css"; 

const URL_base = "https://www.swapi.tech/api/"

// Using GitHub hosted Star Wars images - more reliable
const characterImages = {
    1: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/1.jpg", // Luke Skywalker
    2: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/2.jpg", // C-3PO
    3: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/3.jpg", // R2-D2
    4: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/4.jpg", // Darth Vader
    5: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/5.jpg", // Leia
    6: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/6.jpg", // Owen Lars
    7: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/7.jpg", // Beru Lars
    8: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/8.jpg", // R5-D4
    9: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/9.jpg", // Biggs
    10: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/10.jpg" // Obi-Wan
};

const planetImages = {
    1: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/1.jpg", // Tatooine
    2: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/2.jpg", // Alderaan
    3: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/3.jpg", // Yavin IV
    4: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/4.jpg", // Hoth
    5: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/5.jpg", // Dagobah
    6: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/6.jpg", // Bespin
    7: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/7.jpg", // Endor
    8: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/8.jpg", // Naboo
    9: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/9.jpg", // Coruscant
    10: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/10.jpg" // Kamino
};

const vehicleImages = {
    4: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/4.jpg", // Sand Crawler
    6: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/6.jpg", // T-16 skyhopper
    7: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/7.jpg", // X-34 landspeeder
    8: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/8.jpg", // TIE/LN starfighter
    14: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/14.jpg", // Snowspeeder
    16: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/16.jpg", // TIE bomber
    18: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/18.jpg", // AT-AT
    19: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/19.jpg", // AT-ST
    20: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/20.jpg", // Storm IV Twin-Pod cloud car
    24: "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/24.jpg" // Sail barge
};

// Star Wars themed fallback images
const defaultImages = {
    character: "https://via.placeholder.com/270x200/2c3e50/ffffff?text=Star+Wars+Character",
    planet: "https://via.placeholder.com/270x200/34495e/ffffff?text=Star+Wars+Planet", 
    vehicle: "https://via.placeholder.com/270x200/8e44ad/ffffff?text=Star+Wars+Vehicle"
};

export function Home() {

    const { store, dispatch } = useGlobalReducer()

    function toggleFavorite(item, type) {
        const favoriteItem = {
            ...item,
            type: type
        };
        
        const isAlreadyFavorite = store.favorites.find(fav => fav.uid === item.uid && fav.type === type);
        
        if (isAlreadyFavorite) {
            dispatch({
                type: "REMOVE_FAVORITE",
                payload: favoriteItem
            });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: favoriteItem
            });
        }
    }

    function isFavorite(item, type) {
        return store.favorites.some(fav => fav.uid === item.uid && fav.type === type);
    }

    function deleteFavorite(item) {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: item
        });
    }

    function getCharacterImageSrc(uid) {
        return characterImages[uid] || defaultImages.character;
    }

    function getPlanetImageSrc(uid) {
        return planetImages[uid] || defaultImages.planet;
    }

    function getVehicleImageSrc(uid) {
        return vehicleImages[uid] || defaultImages.vehicle;
    }

    const handleImageError = (e, type) => {
        e.target.src = defaultImages[type];
    };

    return (
        <>
            <ul className="sin-estilo">
                <li className="nav-item dropdown m-0" >
                    <ul className="dropdown-menu sub-menu">
                        {
                            store.favorites.map((item) => {
                                return (
                                    <li key={`${item.uid}-${item.type}`} className="d-flex justify-content-between pe-3">
                                        <a className="dropdown-item text-white ps-0 bg-transparent" href="#">{item.name}</a>
                                        <i
                                            className="fa-solid fa-trash py-1"
                                            onClick={() => deleteFavorite(item)}>
                                        </i>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-11 position-relative mb-5">
                        <h3 className="mb-4 pb-3 bordergrueso border-dark">Databank | Characters</h3>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{left: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('characters-scroll');
                                container.scrollBy({left: -320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <div id="characters-scroll" className="px-3 d-flex overflow-x-auto gap-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            {
                                store.characters.map((item) => {
                                    const isFav = isFavorite(item, 'character');
                                    return (
                                        <div key={item.name} style={{minWidth: '270px', maxWidth: '270px', flexShrink: 0}}>
                                            <div className="card border border-dark h-100 star-wars-card">
                                                <div className="card-image-container character-image-container">
                                                    <img 
                                                        src={getCharacterImageSrc(item.uid)} 
                                                        className="card-image" 
                                                        alt={item.name} 
                                                        onError={(e) => handleImageError(e, 'character')}
                                                    />
                                                </div>
                                                <div className="card-body bg-dark text-white d-flex flex-column">
                                                    <h5>{item.name}</h5>
                                                    <p className="card-text m-0">UID: {item.uid}</p>
                                                    <p className="card-text m-0">Character from Star Wars</p>
                                                    <p className="card-text m-0 mb-auto">Universe</p>
                                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                                        <Link to={`/characters/${item.uid}`} className="btn btn-primary">Learn More</Link>
                                                        <i 
                                                            className={`fa-solid fa-heart fs-5 ${isFav ? 'text-danger' : 'text-white'}`}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => toggleFavorite(item, 'character')}>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{right: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('characters-scroll');
                                container.scrollBy({left: 320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className="col-12 col-md-11 position-relative mb-5">
                        <h3 className="mb-4 pb-3 bordergrueso border-dark">Databank | Planets</h3>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{left: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('planets-scroll');
                                container.scrollBy({left: -320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <div id="planets-scroll" className="px-3 d-flex overflow-x-auto gap-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            {
                                store.planets.map((item) => {
                                    const isFav = isFavorite(item, 'planet');
                                    return (
                                        <div key={item.name} style={{minWidth: '270px', maxWidth: '270px', flexShrink: 0}}>
                                            <div className="card border border-dark h-100 star-wars-card">
                                                <div className="card-image-container planet-image-container">
                                                    <img 
                                                        src={getPlanetImageSrc(item.uid)} 
                                                        className="card-image" 
                                                        alt={item.name} 
                                                        onError={(e) => handleImageError(e, 'planet')}
                                                    />
                                                </div>
                                                <div className="card-body bg-dark text-white d-flex flex-column">
                                                    <h5>{item.name}</h5>
                                                    <p className="card-text m-0">UID: {item.uid}</p>
                                                    <p className="card-text m-0">Planet from Star Wars</p>
                                                    <p className="card-text m-0 mb-auto">Galaxy</p>
                                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                                        <Link to={`/planets/${item.uid}`} className="btn btn-primary">Learn More</Link>
                                                        <i 
                                                            className={`fa-solid fa-heart fs-5 ${isFav ? 'text-danger' : 'text-white'}`}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => toggleFavorite(item, 'planet')}>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{right: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('planets-scroll');
                                container.scrollBy({left: 320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div className="col-12 col-md-11 position-relative mb-5">
                        <h3 className="mb-4 pb-3 bordergrueso border-dark">Databank | Vehicles</h3>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{left: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('vehicles-scroll');
                                container.scrollBy({left: -320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <div id="vehicles-scroll" className="px-3 d-flex overflow-x-auto gap-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                            {
                                store.vehicles.map((item) => {
                                    const isFav = isFavorite(item, 'vehicle');
                                    return (
                                        <div key={item.name} style={{minWidth: '270px', maxWidth: '270px', flexShrink: 0}}>
                                            <div className="card border border-dark h-100 star-wars-card">
                                                <div className="card-image-container vehicle-image-container">
                                                    <img 
                                                        src={getVehicleImageSrc(item.uid)} 
                                                        className="card-image" 
                                                        alt={item.name} 
                                                        onError={(e) => handleImageError(e, 'vehicle')}
                                                    />
                                                </div>
                                                <div className="card-body bg-dark text-white d-flex flex-column">
                                                    <h5>{item.name}</h5>
                                                    <p className="card-text m-0">UID: {item.uid}</p>
                                                    <p className="card-text m-0">Vehicle from Star Wars</p>
                                                    <p className="card-text m-0 mb-auto">Universe</p>
                                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                                        <Link to={`/vehicles/${item.uid}`} className="btn btn-primary">Learn More</Link>
                                                        <i 
                                                            className={`fa-solid fa-heart fs-5 ${isFav ? 'text-danger' : 'text-white'}`}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => toggleFavorite(item, 'vehicle')}>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button 
                            className="btn btn-dark position-absolute" 
                            style={{right: '-50px', top: '50%', transform: 'translateY(-50%)', zIndex: 10}}
                            onClick={() => {
                                const container = document.getElementById('vehicles-scroll');
                                container.scrollBy({left: 320, behavior: 'smooth'});
                            }}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}