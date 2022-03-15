import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Juego = () => {

    const { id } = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3002/${id}`)
        .then( response => response.json())
        .then( todo => setTodo(todo))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h3>{todo.tarea}</h3>
        <p><span className="badge badge-pill badge-danger ml-2">{todo.prioridad}</span></p>
        <p className="fechaEntregas">{todo.fechaEntrega}</p>
        <p>{todo.descripcion}</p>
        <p>{todo.state ? "Disponible" : "Agotado"}</p>
        <Link to='/tareas/' >Volver a listado de Tareas</Link>
    </div>
  )
}

export default Juego