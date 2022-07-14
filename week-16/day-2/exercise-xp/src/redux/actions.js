export const PLUS = 'PLUS';
export const MINUS = 'MINUS'; // Good practise


export const add = () => {
    return {
        type: PLUS
    }
}

export const minus = () => {
    return {
        type: MINUS
    }
}