export const ACTIONS = {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'
}
Object.freeze(ACTIONS)

export const increment = () => {
    return {
        type: ACTIONS.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: ACTIONS.DECREMENT
    }
}