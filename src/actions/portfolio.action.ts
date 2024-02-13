// action/portfolio.action.ts
import { Dispatch } from 'redux';
import axios from 'axios';
import { productConstants } from './constants';
import { AppThunk } from 'store';
import { API } from '../../urlConfig';

const baseURL = API;

export const getPortfolios = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: productConstants.GET_ALL_PORTFOLIOS_REQUEST });
    const res = await axios.get(`${baseURL}portfolio/getPortfolios`);
    if (res.status === 200) {
      const { portfolios } = res.data;
      dispatch({
        type: productConstants.GET_ALL_PORTFOLIOS_SUCCESS,
        payload: { portfolios },
      });
    } else {
      dispatch({ type: productConstants.GET_ALL_PORTFOLIOS_FAILURE });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: productConstants.GET_ALL_PORTFOLIOS_FAILURE });
  }
};

export const setSelectedTag = (tag: string) => ({
  type: productConstants.SET_SELECTED_TAG,
  payload: tag,
});

  // visitors

export const portfolioVisit = (data: object) => async () => {
  try {
    const response = await axios.post(`${baseURL}portfolio/portfolio-visit`, data);

    if (response.status === 200) {
      console.log('Portfolio visit recorded successfully');
    } else {
      console.error('Failed to record portfolio visit');
    }
  } catch (error) {
    console.error('Error recording portfolio visit:', error);
  }
};

export const portfolioExit = (data: object) => async () => {
  try {
    const response = await axios.post(`${baseURL}portfolio/portfolio-exit`, data);

    if (response.status === 200) {
      console.log('Portfolio visit recorded successfully');
    } else {
      console.error('Failed to record portfolio visit');
    }
  } catch (error) {
    console.error('Error recording portfolio visit:', error);
  }
};
