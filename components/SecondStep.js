import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
          value={props.fullName}
          onChange={props.handleChangeName}
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text">{/* Error */}</FormHelperText>
      </FormControl>

      <br />
      <br />
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
