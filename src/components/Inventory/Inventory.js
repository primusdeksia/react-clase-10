import React, { useEffect } from 'react';
import Formulario from '../formulario/formulario';
import { InventoryItem } from '../InventoryItem/InventoryItem';
import Counter from './Counter';


export const Inventory = ({data, setData}) => {

    useEffect(() => {
        const fetchData = async () => {
                let response = await fetch("http://localhost:3002/");
                let todos = await response.json();
                setData(todos);
            }

            fetchData();
        }, [])

        
        

    return (
        <div className="container contenidoA">
            <div className="row mt-12 text-center">
                <Counter />
            </div>
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <Formulario></Formulario>
                </div>
            </div>

            <div className="col-md-8">
                <div className="row rowEstilos">
                    <ul>
                        {data.map(
                            (todo) => typeof todo.id != "undefined" && <InventoryItem key={todo.id} id={todo.id} tarea={todo.tarea} prioridad={todo.prioridad} descripcion={todo.descripcion} fechaEntrega={todo.fechaEntrega} />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )

};
