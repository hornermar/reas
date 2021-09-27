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
import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '750px',
  },
  button: {
    marginRight: theme.spacing(1),
  },

  formItem: {
    '& > *': {
      width: '100%',
      margin: theme.spacing(2),
    },
  },
  stepper: {
    maxWidth: '750px',
    margin: 'auto',
  },
}));

function getSteps() {
  return ['Údaje o nemovitosti', 'Kontaktní informace', 'Dokončení'];
}

function App() {
  const classes = useStyles();
  const steps = getSteps();

  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    estateType: '',
    region: '',
    district: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const [validPhone, setValidPhone] = useState(true);
  const [phoneErr, setPhoneErr] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [emailErr, setEmailErr] = useState(false);

  const [errorSubmit, setErrorSubmit] = useState({
    hasError: '',
    message: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const validatePhoneNumber = (input) => {
    var re = /^\d+$/;
    const stringWithoutSpaces = input.replace(/ /g, '');

    if (stringWithoutSpaces.length === 9 && re.test(stringWithoutSpaces)) {
      return true;
    } else if (
      stringWithoutSpaces.length === 13 &&
      stringWithoutSpaces.startsWith('+420') &&
      re.test(stringWithoutSpaces.slice(4, 13))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (input) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
  };

  const handleNext = () => {
    if (validPhone && validEmail) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    if (!validPhone) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }

    if (!validEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setErrorSubmit({
      hasError: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(data, setErrorSubmit, setActiveStep));
  };

  const handleNewForm = () => {
    setData({
      estateType: '',
      region: '',
      district: '',
      fullName: '',
      phone: '',
      email: '',
    });
    setActiveStep(0);
    setErrorSubmit({
      hasError: '',
      message: '',
    });
  };

  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Container className={classes.root}>
        <form
          className={classes.formItem}
          onSubmit={handleSubmit}
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
              validateEmail={validateEmail}
              validatePhoneNumber={validatePhoneNumber}
              data={data}
              setData={setData}
              setValidPhone={setValidPhone}
              phoneErr={phoneErr}
              setValidEmail={setValidEmail}
              emailErr={emailErr}
            />
          ) : (
            ''
          )}
          {activeStep === 2 || activeStep === 3 ? (
            <ThirdStep
              data={data}
              handleBack={handleBack}
              errorSubmit={errorSubmit}
              handleNewForm={handleNewForm}
            />
          ) : (
            ''
          )}
        </form>
      </Container>
    </>
  );
}

export default App;
