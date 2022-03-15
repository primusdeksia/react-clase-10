import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {

  const [tarea, setTarea] = useState('')
  const [fechaEntrega, setfechaEntrega] = useState('')
  const [descripcion, setdescripcion] = useState('')
  const [prioridad, setprioridad] = useState('')
  const [state, setState] = useState(true)
  const navigate = useNavigate()

    const onTareaChangeHandler = (e) => {
        const text = e.target.value
        setTarea(text)
    }

    const onfechaEntregaChangeHandler = (e) => {
        const text = e.target.value
        setfechaEntrega(text)
    }

    const ondescripcionChangeHandler = (e) => {
        const text = e.target.value
        setdescripcion(text)
    }

    const onprioridadChangeHandler = (e) => {
        const text = e.target.value
        setprioridad(text)
    }

    const onStateChangeHandler = e => setState(e.target.checked)

    const onClickHandler = async () => {
      await fetch('http://localhost:3002/', {
          method: 'POST',
          body: JSON.stringify({ tarea, prioridad, descripcion, fechaEntrega, state }),
          headers: {
              "Content-Type": "application/json"
          }
      })
      window.location.reload(false);
    }

    return (
      <div className="card">
        <div className="form">
          <div className="form-group">
            <label for="tarea">Tarea</label>
            <input type="text" name="tarea" className="form-control" onChange={onTareaChangeHandler} placeholder="Tarea"  value={tarea} />
          </div>
          <div className="form-group">
            <label for="fechaEntrega">Fecha de entrega</label>
            <input type="date" name="fechaEntrega" className="form-control" onChange={onfechaEntregaChangeHandler} placeholder="Fecha de entrega" value={fechaEntrega} />
          </div>
          <div className="form-group">
            <label for="descripcion">Descripción</label>
            <input type="text" name="descripcion" className="form-control" onChange={ondescripcionChangeHandler} placeholder="Descripción" value={descripcion} />
          </div>
          <div className="form-group">
            <label for="prioridad"></label>
            <select name="prioridad" className="form-control" onChange={onprioridadChangeHandler} value={prioridad} >
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </div>
          <div className="form-group">
              <label htmlFor='name'>Estado: </label>
              <input checked={state} id='name' onChange={onStateChangeHandler} type='checkbox' />
          </div>
          <button onClick={onClickHandler} className="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    )
}

export default Formulario;
