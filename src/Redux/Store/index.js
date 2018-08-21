import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { loggers } from 'redux-act'

import CommentReducer from '../Reducers/CommentReducer'
import { reducer as FBOrgReducer } from '../../FBOrg/index'


const loggerMiddleware = createLogger()

const logger = createLogger({
  ...loggers.reduxLogger,
});

const AppReducer = combineReducers({
  CommentApp:CommentReducer,
  FBOrgApp: FBOrgReducer
});

const store = createStore(
  AppReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    logger
  )
)

// function configureStore() {
//   const store = createStore(AppReducer);
//   return store;
// }

// const OwnedStore = configureStore();

export default store;