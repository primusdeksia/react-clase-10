import './App.css';
import { Inventory } from './components/Inventory/Inventory';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Tareas } from './components/Tareas';
import { Tarea } from './components/Tarea';
import { Provider } from 'react-redux' 
import store from './components/redux/store';


const App = () => {

  const [showed, setShowed] = useState(false)

  const [data, setData] = useState([])

  const showHandler = () => setShowed(!showed)

  return (
    <Provider store={store}>
      <Routes>
        <Route element={<Navbar data={data} setData={setData} showHandler={showHandler} />} >
          <Route index path='/' element={<h2>Bienvenidos</h2>} />
          <Route path='/tareas' element={<Tareas data={data} setData={setData} />} />
          <Route path='/tareas/:id' element={<Tarea />} />
          <Route path='*' element={<h3>Página no encontrada</h3>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
