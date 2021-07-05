export type Dispatch = React.Dispatch<{ type: string; payload?: any }>;

export const atLeastSixCharacters = (dispatch: Dispatch) => (string: string) => {
    dispatch({
        type: 'setSixChars',
        payload: {
            value: string.length > 6
        }
    })
}

export const atLeastOneSpecialCharacter = (dispatch: Dispatch) => (string: string) => {
    const regex = /[^A-Z a-z0-9]/
    dispatch({
        type: 'setSpecialChar',
        payload: {
            value: regex.test(string)
        }
    })
}

export const atLeastOneUppercaseCharacter = (dispatch: Dispatch) => (string: string) => {
    const regex = /[A-Z]/
    dispatch({
        type: 'setUppercaseChar',
        payload: {
            value: regex.test(string)
        }
    })
}

export const checkIfGreaterThan20Chars = (dispatch: Dispatch) => (string: string) => {
    dispatch({
        type: 'setGreaterThan20Chars',
        payload: {
            value: string.length > 20
        }
    })
}

