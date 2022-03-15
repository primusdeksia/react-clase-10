import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './CounterActions'

const Counter = ({ counter, decrement, increment }) => {
    return (
        <>
            <h3>Cantidad de tareas por hacer esta semana: {counter}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        //state
        counter : state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement()),
    }
}

// export default Counter
// Lo exporto conectado
// const CounterConnected = connect()(Counter)
// export default CounterConnected
// export default connect()(Counter)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)