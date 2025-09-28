import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../personajes.css";

const URL_base = "https://www.swapi.tech/api/vehicles/"

export function Vehicles() {

    const { store } = useGlobalReducer()
    const [vehiculo, setVehiculo] = useState({})
    const { idvehiculo } = useParams()
    const navigate = useNavigate()

    async function getVehiculo() {
        try {
            const response = await fetch(`${URL_base}${idvehiculo}`)
            const data = await response.json()

            if (response.ok) {
                setVehiculo(data.result.properties)
            } else {
                setVehiculo(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVehiculo()
    }, [])

    return (
        <>
            {
                vehiculo ?
                    <div className="container mb-5">
                        <button className="btn btn-dark" onClick={() => navigate(-1)}> Regresar</button>
                        <div className="row d-flex">
                            <div className="col-12 col-md-7 p-0 mt-4 ">
                                <img className="imagen-carta rounded-start" src="https://lumiere-a.akamaihd.net/v1/images/remnant-speeder-bike-main_8b679155.jpeg?region=240%2C0%2C951%2C536" alt="" />
                            </div>
                            <div className="col-12 col-md-5 bg-dark mt-4 rounded-end pt-4 px-4">
                                <h4>{vehiculo.name}</h4>
                                <p>A vehicle. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Minima molestias deleniti nisi nihil voluptatibus optio et placeat hic. Exercitationem, voluptate
                                    aliquam necessitatibus temporibus eum velit ratione provident placeat quasi nostrum. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Itaque voluptas quo molestias dignissimos magnam.
                                    Vero nemo sint facere voluptatibus earum, perferendis odio consectetur eveniet culpa. Vitae totam e
                                    xcepturi repellat quos?
                                </p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 pt-3">
                                <h4>Consumables:</h4>
                                <p className="fs-5 mb-4 pt-2"> {vehiculo.consumables}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Cargo Capacity:</h4>
                                <p className="fs-5 mb-4 pt-2">{vehiculo.cargo_capacity}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Passengers:</h4>
                                <p className="fs-5 mb-4 pt-2">{vehiculo.passengers}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Length:</h4>
                                <p className="fs-5 mb-4 pt-2"> {vehiculo.length}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Model:</h4>
                                <p className="fs-5 mb-4 pt-2">{vehiculo.model}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Manufacturer:</h4>
                                <p className="fs-5 mb-4 pt-2">{vehiculo.manufacturer}</p>
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