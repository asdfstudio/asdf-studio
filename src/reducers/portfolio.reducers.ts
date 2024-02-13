// reducers/portfolio.reducers.ts

import { productConstants } from 'actions/constants';
import { Portfolio } from 'types';

export interface PortfolioState {
  portfolios: Portfolio[];
  loading: boolean;
  selectedTag: string | null;
}

const initialState: PortfolioState = {
  portfolios: [],
  loading: false,
  selectedTag: 'All Works',
};

export default function portfolioReducer(
  state = initialState,
  action: any
): PortfolioState {
  switch (action.type) {
    case productConstants.GET_ALL_PORTFOLIOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productConstants.GET_ALL_PORTFOLIOS_SUCCESS:
      return {
        ...state,
        portfolios: action.payload.portfolios,
        loading: false,
      };
    case productConstants.GET_ALL_PORTFOLIOS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case productConstants.SET_SELECTED_TAG:
      return {
        ...state,
        selectedTag: action.payload,
    };
    default:
      return state;
  }
}
