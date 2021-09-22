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
          props.validatePhoneNumber(e.target.value)
            ? props.setValidPhone(true)
            : props.setValidPhone(false);
        }}
        label="Telefonní číslo"
        id="phone-number"
        error={props.numberErr ? true : false}
        helperText={props.numberErr ? 'Neplatné telefonní číslo.' : ''}
      />

      <TextField
        value={props.data.email}
        onChange={(e) => {
          props.setData({ ...props.data, email: e.target.value });
          props.validateEmail(e.target.value)
            ? props.setValidEmail(true)
            : props.setValidEmail(false);
        }}
        label="Email"
        id="email"
        type="text"
        error={props.emailErr ? true : false}
        helperText={props.emailErr ? 'Neplatný email' : ''}
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
