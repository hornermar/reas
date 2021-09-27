import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ErrorSubmit from './ErrorSubmit';

const ThirdStep = (props) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Rekapitulace
      </Typography>

      <p>Typ nemovitosti: {props.data.estateType}</p>
      <p>Kraj: {props.data.region}</p>
      <p>Okres: {props.data.district}</p>
      <p>Jméno: {props.data.fullName}</p>
      <p>Telefonní číslo: {props.data.phone}</p>
      <p>Email: {props.data.email}</p>

      <ErrorSubmit errorSubmit={props.errorSubmit} />

      <Button
        disabled={
          props.errorSubmit.hasError || props.errorSubmit.hasError === ''
            ? false
            : true
        }
        type="submit"
        variant="contained"
        color="primary"
      >
        {props.errorSubmit.hasError || props.errorSubmit.hasError === ''
          ? 'Odeslat formulář'
          : 'Úspěšně odesláno'}
      </Button>

      {props.errorSubmit.hasError || props.errorSubmit.hasError === '' ? (
        <Button variant="contained" color="primary" onClick={props.handleBack}>
          Zpět
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleNewForm}
        >
          Nový formulář
        </Button>
      )}
    </>
  );
};

export default ThirdStep;
