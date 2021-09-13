import * as api from '../api';

export const getClients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClients();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClient = (client) => async (dispatch) => {
  try {
    const { data } = await api.createClient(client);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
