// reducers/index.ts
import { combineReducers } from 'redux';
import portfolioReducers from './portfolio.reducers';

const rootReducer = combineReducers({
    portfolio: portfolioReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;