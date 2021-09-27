import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

const ErrorHandler = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    if (props.errorHandler.hasError) {
      setShow(true);
    }
  }, [props.errorHandler]);

  return (
    <>
      {show ? (
        <div>
          <Alert severity="error">{props.errorHandler.message}</Alert>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ErrorHandler;
