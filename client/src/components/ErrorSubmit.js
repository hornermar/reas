import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

const ErrorSubmit = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    if (props.errorSubmit.hasError) {
      setShow(true);
    }
  }, [props.errorSubmit]);

  return (
    <>
      {show ? (
        <div>
          <Alert severity="error">{props.errorSubmit.message}</Alert>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ErrorSubmit;
