import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

      <Button type="submit" variant="contained" color="primary">
        Odeslat formulář
      </Button>
      <Button variant="contained" color="primary" onClick={props.handleBack}>
        Zpět
      </Button>
    </>
  );
};

export default ThirdStep;
