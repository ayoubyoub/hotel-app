// nuitActions.js

import * as actionTypes from '../constants/actionTypes';

export const createNuit = (nuit) => {
    return {
      type: actionTypes.CREATE_NEW_NUIT,
      nuit: nuit
    }
  };