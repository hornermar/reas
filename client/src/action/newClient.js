import * as api from '../api';

export const getClients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClients();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClient = (client, setErrorHandler) => async (dispatch) => {
  try {
    const { data } = await api.createClient(client);

    dispatch({ type: 'CREATE', payload: data });
    setErrorHandler({
      hasError: false,
      message: 'Formulář úspěšně odeslán.',
    });
  } catch (error) {
    console.log(error);
    setErrorHandler({
      hasError: true,
      message: 'Formulář se nepodařilo odeslat. Zkuste to prosím později.',
    });
  }
};
