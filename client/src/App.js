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
    width: '80%',
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

  const [validPhone, setValidPhone] = useState(true);
  const [numberErr, setNumberErr] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [emailErr, setEmailErr] = useState(false);

  const [errorHandler, setErrorHandler] = useState({
    hasError: '',
    message: '',
  });

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const validatePhoneNumber = (input_str) => {
    var re = /^\d+$/;
    const withoutSpace = input_str.replace(/ /g, '');

    if (withoutSpace.length === 9 && re.test(withoutSpace)) {
      return true;
    } else if (
      withoutSpace.length === 13 &&
      withoutSpace.startsWith('+420') &&
      re.test(withoutSpace.slice(4, 12))
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
      setNumberErr(true);
    } else {
      setNumberErr(false);
    }

    if (!validEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(data, setErrorHandler));
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
    setErrorHandler({
      hasError: '',
      message: '',
    });
  };

  return (
    <Container className={classes.root}>
      <Stepper activeStep={activeStep}>
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
            data={data}
            setData={setData}
            validPhone={validPhone}
            setValidPhone={setValidPhone}
            validatePhoneNumber={validatePhoneNumber}
            numberErr={numberErr}
            validateEmail={validateEmail}
            setValidEmail={setValidEmail}
            emailErr={emailErr}
          />
        ) : (
          ''
        )}
        {activeStep === 2 || errorHandler.hasError ? (
          <ThirdStep
            data={data}
            handleBack={handleBack}
            errorHandler={errorHandler}
            handleNewForm={handleNewForm}
          />
        ) : (
          ''
        )}
      </form>
    </Container>
  );
}

export default App;
