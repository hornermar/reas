import * as api from '../api';

export const getClients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClients();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createClient =
  (client, setErrorSubmit, setActiveStep) => async (dispatch) => {
    try {
      const { data } = await api.createClient(client);

      dispatch({ type: 'CREATE', payload: data });
      setErrorSubmit({
        hasError: false,
        message: '',
      });
      setActiveStep(3);
    } catch (error) {
      console.log(error);
      setErrorSubmit({
        hasError: true,
        message: 'Formulář se nepodařilo odeslat. Zkuste to prosím později.',
      });
    }
  };
