import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './InventoryItem.module.css'

export const InventoryItem = ({ id, tarea, prioridad, descripcion, fechaEntrega }) => {

    const [checked, setChecked] = useState(false)


    return (
            <li className="col-md-4"  key={id}>
                <div className="card mt-4">
                    <div className="card-title text-center">
                    <h3>{tarea}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                        {prioridad}
                    </span>
                    </div>
                    <div className="card-body">
                    <p className="fechaEntregas">{fechaEntrega}</p>
                    <p>{descripcion}</p>
                    </div>
                    <div className="card-footer">
                        <Link to={`/tareas/${id}`}> Ver </Link>
                        <button onClick={ () => this.deleteContact(id) } >Remove</button>
                    </div>
                </div>
            </li>            
    )
}