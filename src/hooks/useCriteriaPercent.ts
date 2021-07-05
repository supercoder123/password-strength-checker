import { useEffect, useRef } from "react";
import { addPercent, setStrength, subtractPercent } from "../actions";
import { usePasswordContext } from "../components/PasswordContextProvider";

export function useCriteriaPercent(criteria: boolean) {
    const { state, dispatch } = usePasswordContext();

    function setPasswordStrength(percent: number) {
        if (percent < 20) {
            dispatch(setStrength('Weak'));
        } else if (percent >= 20 && percent < 40) {
            dispatch(setStrength('Bad'));
        } else if (percent >= 40 && percent < 60) {
            dispatch(setStrength('Medium'));
        } else if (percent >= 60 && percent < 70) {
            dispatch(setStrength('Good'));
        } else if (percent < 70) {
            dispatch(setStrength('Strong'));
        }
    }

    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            if (criteria) {
                dispatch(addPercent(20));
            } else {
                dispatch(subtractPercent(20));
            }
            setPasswordStrength(state.percent);
        }
    }, [criteria]);

    return [state.percent, state.passwordStrength];
}