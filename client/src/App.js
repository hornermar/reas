import React, { useState, useEffect } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Container from '@material-ui/core/Container';

import { useDispatch } from 'react-redux';
import { createClient, getClients } from './action/newClient';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '500px',
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Údaje o nemovitosti', 'Kontaktní informace', 'Dokončení'];
}

function App() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(data));
    setActiveStep(0);
    setData({
      estateType: '',
      region: '',
      district: '',
      fullName: '',
      phone: '',
      email: '',
    });
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <form
          onSubmit={handleSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          {activeStep === 0 ? (
            <FirstStep handleNext={handleNext} data={data} setData={setData} />
          ) : (
            ''
          )}

          {activeStep === 1 ? (
            <SecondStep
              handleNext={handleNext}
              handleBack={handleBack}
              data={data}
              setData={setData}
            />
          ) : (
            ''
          )}

          {activeStep === 2 ? (
            <ThirdStep data={data} handleBack={handleBack} />
          ) : (
            ''
          )}
        </form>
      </div>
    </Container>
  );
}

export default App;
