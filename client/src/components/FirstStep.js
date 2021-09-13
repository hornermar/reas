import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import regionList from '../data/regionList.json';

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

const FirstStep = (props) => {
  const classes = useStyles();

  const filteredRegion = regionList.filter(
    (item) => item.region === props.data.region,
  );

  const filteredDistrict = filteredRegion.map((item) => item.district);

  return (
    <>
      <h2>Nemovitost</h2>
      <p>1/2</p>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Typ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.data.estateType}
          onChange={(e) => {
            props.setData({ ...props.data, estateType: e.target.value });
          }}
        >
          <MenuItem value="byt">byt</MenuItem>
          <MenuItem value="dům">dům</MenuItem>
          <MenuItem value="pozemek">pozemek</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Kraj</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.data.region}
          onChange={(e) => {
            props.setData({ ...props.data, region: e.target.value });
          }}
        >
          {regionList.map((item) => (
            <MenuItem key={item.region} value={item.region}>
              {item.region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Okres</InputLabel>
        <Select
          disabled={props.data.region === '' ? true : false}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.data.district}
          onChange={(e) => {
            props.setData({ ...props.data, district: e.target.value });
          }}
        >
          {props.data.region !== ''
            ? filteredDistrict[0].map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))
            : ''}
        </Select>
      </FormControl>

      <br />
      <br />
      <br />
      <br />

      <Button
        variant="contained"
        color="primary"
        disabled={
          props.data.estateType === '' ||
          props.data.region === '' ||
          props.data.district === ''
        }
        value="second"
        onClick={props.handleClick}
      >
        Další
      </Button>
    </>
  );
};

export default FirstStep;
