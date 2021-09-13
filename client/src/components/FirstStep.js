import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import regionList from '../data/regionList.json';
import Typography from '@material-ui/core/Typography';

const FirstStep = (props) => {
  const filteredRegion = regionList.filter(
    (item) => item.region === props.data.region,
  );

  const filteredDistrict = filteredRegion.map((item) => item.district);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Údaje o nemovitosti
      </Typography>

      <FormControl>
        <InputLabel id="estate-type-label">Typ</InputLabel>
        <Select
          labelId="estate-type-label"
          id="estate-type"
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

      <FormControl>
        <InputLabel id="region-label">Kraj</InputLabel>
        <Select
          labelId="region-label"
          id="region"
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

      <FormControl>
        <InputLabel id="district-label">Okres</InputLabel>
        <Select
          disabled={props.data.region === '' ? true : false}
          labelId="district-label"
          id="district"
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

      <Button
        variant="contained"
        color="primary"
        disabled={
          props.data.estateType === '' ||
          props.data.region === '' ||
          props.data.district === ''
        }
        onClick={props.handleNext}
      >
        Další
      </Button>
    </>
  );
};

export default FirstStep;
