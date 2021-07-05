import React from "react";
import { useState } from "react";
import { useFela } from "react-fela";
import { setTouched, updateText } from "../../actions";
import { useCriteriaPercent } from "../../hooks/useCriteriaPercent";
import {
  atLeastOneSpecialCharacter,
  atLeastOneUppercaseCharacter,
  atLeastSixCharacters,
  checkIfGreaterThan20Chars,
} from "../../validations";
import Criterias from "../Criterias";
import {
  PasswordContextProvider,
  usePasswordContext,
} from "../PasswordContextProvider";
import ProgressBar from "../ProgressBar";
import {
  container,
  eye,
  input,
  label,
  inputWithEye,
  progressBarRow,
} from "./style";

function PasswordStrengthInput() {
  console.log("Input");

  const { css } = useFela();
  const { state, dispatch } = usePasswordContext();

  const {
    criteria: { sixChars, specialChar, uppercaseChar, greaterThan20Chars },
    percent,
  } = state;

  const [passwordVisible, setPasswordVisible] = useState(false);

  useCriteriaPercent(sixChars);
  useCriteriaPercent(specialChar);
  useCriteriaPercent(uppercaseChar);
  useCriteriaPercent(greaterThan20Chars);

  function calculatePasswordStrength(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    dispatch(updateText(value));
    atLeastSixCharacters(dispatch)(value);
    atLeastOneSpecialCharacter(dispatch)(value);
    atLeastOneUppercaseCharacter(dispatch)(value);
    checkIfGreaterThan20Chars(dispatch)(value);
  }

  return (
    <div className={css(container)}>
      <label className={css(label)} htmlFor="passwords">
        Password
        <div className={css(inputWithEye)}>
          <input
            className={css(input)}
            type={passwordVisible ? "text" : "password"}
            name="passwords"
            onChange={(e) => calculatePasswordStrength(e)}
            onBlur={() => dispatch(setTouched())}
          />
          <button
            onClick={() => setPasswordVisible(!passwordVisible)}
            className={css(eye)}
          >
            eye
          </button>
        </div>
      </label>
      <div className={css(progressBarRow)}>
        <ProgressBar progress={percent} />
        Password Stength: {state.passwordStrength}
      </div>
      <div>
        <Criterias />
      </div>
    </div>
  );
}

export default function PasswordStrengthWrapper() {
  console.log("Wrapper");
  return (
    <PasswordContextProvider>
      <PasswordStrengthInput />
    </PasswordContextProvider>
  );
}
