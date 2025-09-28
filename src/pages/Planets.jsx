import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../personajes.css";

const URL_base = "https://www.swapi.tech/api/planets/"

export function Planets() {

    const { store } = useGlobalReducer()
    const [planeta, setPlanteta] = useState({})
    const { idPlanet } = useParams()
    const navigate = useNavigate()

    async function getPlaneta() {
        try {
            const response = await fetch(`${URL_base}${idPlanet}`)
            const data = await response.json()

            if (response.ok) {
                setPlanteta(data.result.properties)
            } else {
                setPlanteta(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPlaneta()
    }, [])

    return (
        <>
            {
                planeta ?
                    <div className="container mb-5">
                        <button className="btn btn-dark" onClick={() => navigate(-1)}> Regresar</button>
                        <div className="row d-flex">
                            <div className="col-12 col-md-7 p-0 mt-4 ">
                                <img className="imagen-carta rounded-start" src="https://lumiere-a.akamaihd.net/v1/images/image_78a7da33.jpeg?region=80%2C0%2C1707%2C959" alt="" />
                            </div>
                            <div className="col-12 col-md-5 bg-dark mt-4 rounded-end pt-4 px-4">
                                <h4>{planeta.name}</h4>
                                <p>A planet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Minima molestias deleniti nisi nihil voluptatibus optio et placeat hic. Exercitationem, voluptate
                                    aliquam necessitatibus temporibus eum velit ratione provident placeat quasi nostrum. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Itaque voluptas quo molestias dignissimos magnam.
                                    Vero nemo sint facere voluptatibus earum, perferendis odio consectetur eveniet culpa. Vitae totam e
                                    xcepturi repellat quos?
                                </p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 pt-3">
                                <h4>Climate:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.climate}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Population:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.population}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Orbital Period:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.orbital_period}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Rotation Period:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.rotation_period}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Diameter:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.diameter}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Terrain:</h4>
                                <p className="fs-5 mb-4 pt-2">{planeta.terrain}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <h1>Star Wars no encontrado</h1>
                        <button className="btn btn-success" onClick={() => navigate(-1)}> Regresar</button>
                    </>
            }
        </>
    )
}