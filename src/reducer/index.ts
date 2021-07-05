import { InitialState } from "./types";

export function reducer(state: InitialState, action: any) {
    switch (action.type) {
        case 'setValue':
            return {
                ...state,
                value: action.payload.value
            };
        case 'setTouched':
            return {
                ...state,
                touched: true
            }
        case 'setSixChars':
            return {
                ...state,
                criteria: {
                    ...state.criteria,
                    sixChars: action.payload.value
                }
            }
        case 'setSpecialChar':
            return {
                ...state,
                criteria: {
                    ...state.criteria,
                    specialChar: action.payload.value

                }
            }
        case 'setUppercaseChar':
            return {
                ...state,
                criteria: {
                    ...state.criteria,
                    uppercaseChar: action.payload.value
                }
            }
        case 'addPercent':
            if (state.percent < 100) {
                return {
                    ...state,
                    percent: state.percent + action.payload.value
                }
            } else {
                return {
                    ...state
                }
            }
        case 'setGreaterThan20Chars':
            return {
                ...state,
                criteria: {
                    ...state.criteria,
                    greaterThan20Chars: action.payload.value
                }
            }
        case 'subtractPercent':
            if (state.percent < 100 && state.percent > 0) {
                return {
                    ...state,
                    percent: state.percent - action.payload.value
                }
            } else {
                return {
                    ...state
                }
            }
        case 'setStrength':
            return {
                ...state,
                passwordStrength: action.payload.value
            }
        default:
            return state;
    }
}