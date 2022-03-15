import React from 'react'
import { Inventory } from '../Inventory/Inventory'

const Tareas = ({ data, setData }) => {
  return (
    <>
        <h1 style={{ textAlign : 'center' }} >Tareas</h1>
        <Inventory data={data} setData={setData} />
    </>
  )
}

export default Tareas