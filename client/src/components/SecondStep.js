import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const SecondStep = (props) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Kontakntí informace
      </Typography>

      <TextField
        label="Celé jméno"
        id="full-name"
        type="text"
        value={props.data.fullName}
        onChange={(e) => {
          props.setData({ ...props.data, fullName: e.target.value });
        }}
      />

      <TextField
        value={props.data.phone}
        onChange={(e) => {
          props.setData({ ...props.data, phone: e.target.value });
        }}
        label="Telefonní číslo"
        id="phone-number"
        inputMode="numeric"
      />

      <TextField
        value={props.data.email}
        onChange={(e) => {
          props.setData({ ...props.data, email: e.target.value });
        }}
        label="Email"
        id="email"
        type="text"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={props.handleNext}
        disabled={
          props.data.estateType === '' ||
          props.data.region === '' ||
          props.data.district === '' ||
          props.data.phone === '' ||
          props.data.email === '' ||
          props.data.fullName === ''
        }
      >
        Další
      </Button>
      <Button variant="contained" color="primary" onClick={props.handleBack}>
        Zpět
      </Button>
    </>
  );
};

export default SecondStep;
