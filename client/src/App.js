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
import FourthStep from './components/FourthStep';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '620px',
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

  const [validPhone, setValidPhone] = useState(true);
  const [numberErr, setNumberErr] = useState(false);

  const [validEmail, setValidEmail] = useState(true);
  const [emailErr, setEmailErr] = useState(false);

  // console.log(validPhone);
  // console.log(data.phone);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const validatePhoneNumber = (input_str) => {
    var re = /^\d+$/;
    const withoutSpace = input_str.replace(/ /g, '');

    // console.log(withoutSpace);

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
    dispatch(createClient(data));
    setActiveStep(3);
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

        {activeStep === 2 ? (
          <ThirdStep data={data} handleBack={handleBack} />
        ) : (
          ''
        )}
      </form>
      {activeStep === 3 ? <FourthStep /> : ''}
    </Container>
  );
}

export default App;
