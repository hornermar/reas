import React, { useState } from 'react';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';

export default function Home() {
  const [step, setStep] = useState('first');
  const [estateType, setEstateType] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');

  const handleChangeType = (e) => {
    setEstateType(e.target.value);
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const handleChangeDistrict = (e) => {
    setDistrict(e.target.value);
  };

  const handleClick = (e) => {
    setStep(e.currentTarget.value);
  };

  console.log('typ: ', estateType, 'region:', region, 'okres:', district);

  console.log(step);

  return (
    <div>
      <h1>REAS</h1>
      <form>
        {step === 'first' ? (
          <FirstStep
            handleChangeType={handleChangeType}
            handleChangeRegion={handleChangeRegion}
            handleChangeDistrict={handleChangeDistrict}
            handleClick={handleClick}
            estateType={estateType}
            region={region}
            district={district}
            step={step}
          />
        ) : (
          ''
        )}

        {step === 'second' ? <SecondStep /> : ''}
      </form>
    </div>
  );
}
