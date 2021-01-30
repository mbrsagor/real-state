import * as Type from "./types";

// Return Errors
export const returnErrors = (msg, status) => {
  return {
    type: Type.GET_ERRORS,
    payload: { msg, status },
  };
};
