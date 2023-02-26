import {configureStore} from '@reduxjs/toolkit';
import stateReducer from './reducer';

export default configureStore({
  reducer: {
    globalState: stateReducer,
  },
});
