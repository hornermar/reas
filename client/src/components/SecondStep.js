import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SecondStep = (props) => {
  const classes = useStyles();

  return (
    <>
      <h2>Osobí údaje</h2>
      <p>2/2</p>

      <br />
      <br />

      <FormControl
      // error
      >
        <InputLabel htmlFor="component-error">Celé jméno</InputLabel>
        <Input
          id="component-error"
          value={props.data.fullName}
          onChange={(e) => {
            props.setData({ ...props.data, fullName: e.target.value });
          }}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">{/* Error */}</FormHelperText>
      </FormControl>

      <br />
      <br />

      <FormControl
      // error
      >
        <InputLabel htmlFor="component-error">Telefonní číslo</InputLabel>
        <Input
          id="component-error"
          value={props.data.phone}
          onChange={props.handleChangePhone}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">{/* Error */}</FormHelperText>
      </FormControl>

      <br />
      <br />

      <FormControl
      // error
      >
        <InputLabel htmlFor="component-error">Email</InputLabel>
        <Input
          id="component-error"
          value={props.data.email}
          onChange={props.handleChangeEmail}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">{/* Error */}</FormHelperText>
      </FormControl>

      <br />
      <br />

      <Button
        variant="contained"
        color="primary"
        value="first"
        onClick={props.handleClick}
      >
        Zpět
      </Button>
    </>
  );
};

export default SecondStep;
