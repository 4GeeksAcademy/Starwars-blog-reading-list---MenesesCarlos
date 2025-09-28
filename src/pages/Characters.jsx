import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import "../personajes.css";

const URL_base = "https://www.swapi.tech/api/people/"

export function Characters() {

    const { store } = useGlobalReducer()
    const [person, setPerson] = useState({})
    const { theid } = useParams()
    const navigate = useNavigate()

    async function getPerson() {
        try {
            const response = await fetch(`${URL_base}${theid}`)
            const data = await response.json()

            if (response.ok) {
                setPerson(data.result.properties)
            } else {
                setPerson(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPerson()
    }, [])

    return (
        <>
            {
                person ?
                    <div className="container mb-5">
                        <button className="btn btn-dark" onClick={() => navigate(-1)}> Regresar</button>
                        <div className="row d-flex">
                            <div className="col-12 col-md-7 p-0 mt-4 ">
                                <img className="imagen-carta rounded-start" src="https://lumiere-a.akamaihd.net/v1/images/paz-vizla-main_4d1071bc.jpeg?region=304%2C0%2C952%2C536" alt="" />
                            </div>
                            <div className="col-12 col-md-5 bg-dark mt-4 rounded-end pt-4 px-4">
                                <h4>{person.name}</h4>
                                <p>A person within the Star Wars universe. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Minima molestias deleniti nisi nihil voluptatibus optio et placeat hic. Exercitationem, voluptate
                                    aliquam necessitatibus temporibus eum velit ratione provident placeat quasi nostrum. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Itaque voluptas quo molestias dignissimos magnam.
                                    Vero nemo sint facere voluptatibus earum, perferendis odio consectetur eveniet culpa. Vitae totam e
                                    xcepturi repellat quos?
                                </p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 pt-3">
                                <h4>Gender:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.gender}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Birth year:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.birth_year}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Height:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.height}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>SkinColor:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.skin_color}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Eye Color:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.eye_color}</p>
                            </div>
                            <div className="col-6 col-md-2 mt-5 border-start border-dark ps-3 pt-3">
                                <h4>Mass:</h4>
                                <p className="fs-5 mb-4 pt-2">{person.mass}</p>
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