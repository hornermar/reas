import React, { useState, useEffect } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

import { useDispatch } from 'react-redux';
import { createClient, getClients } from './action/newClient';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [step, setStep] = useState('first');
  const [data, setData] = useState({
    estateType: '',
    region: '',
    district: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const handleChangePhone = (e) => {
    setData({ ...data, phone: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handleClick = (e) => {
    setStep(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(data));
    console.log(data);
  };

  return (
    <div>
      <h1>REAS</h1>
      <form onSubmit={handleSubmit}>
        {step === 'first' ? (
          <FirstStep handleClick={handleClick} data={data} setData={setData} />
        ) : (
          ''
        )}

        {/* {step === 'second' ? ( */}
        <SecondStep
          handleClick={handleClick}
          handleChangePhone={handleChangePhone}
          handleChangeEmail={handleChangeEmail}
          data={data}
          setData={setData}
        />
        {/* ) : (
          ''
        )} */}

        <br />
        <br />
        <br />
        <br />

        <Button type="submit" variant="contained" color="primary">
          Odeslat formulář
        </Button>
      </form>
    </div>
  );
}

export default App;
