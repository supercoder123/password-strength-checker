import React from "react";
import { list } from "./style";
import { useFela } from "react-fela";
import CriteriaIcon from "../CriteriaIcon";
import { usePasswordContext } from "../PasswordContextProvider";

const Criterias = () => {
  const { css } = useFela();
  const { state } = usePasswordContext();
  const {
    criteria: { sixChars, specialChar, uppercaseChar },
  } = state;

  return (
    <div>
      <ul className={css(list)}>
        <li>
          <CriteriaIcon isValid={sixChars} />
          <p>At least six characters</p>
        </li>
        <li>
          <CriteriaIcon isValid={specialChar} />
          <p>At least one special character</p>
        </li>
        <li>
          <CriteriaIcon isValid={uppercaseChar} />
          <p>At least one uppercase character</p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Criterias;
