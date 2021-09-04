import { useState } from 'react';
import regionList from '../data/regionList.json';

export default function Home() {
  const [estateType, setEstateType] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');

  console.log(regionList);

  const filteredRegion = regionList.filter((item) => item.region === region);

  const filteredDistrict = filteredRegion.map((item) => item.district);

  console.log('typ: ', estateType, 'region:', region, 'okres:', district);

  return (
    <div>
      <h1>REAS</h1>

      <form>
        <label>
          Typ nemovitosti:
          <select
            value={estateType}
            type="text"
            onChange={(e) => setEstateType(e.target.value)}
          >
            <option value="byt">byt</option>
            <option value="dům">dům</option>
            <option value="pozemek">pozemek</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          Kraj:
          <select
            value={region}
            type="text"
            onChange={(e) => setRegion(e.target.value)}
          >
            {regionList.map((item) => (
              <option key={item.region} value={item.region}>
                {item.region}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />

        <label>
          Okres:
          <select
            disabled={region === '' ? true : false}
            value={district}
            type="text"
            onChange={(e) => setDistrict(e.target.value)}
          >
            {region !== ''
              ? filteredDistrict[0].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))
              : ''}
            {/* {filteredDistrict[0].map((item) => (
              <option>{item}</option>
            ))} */}
          </select>
        </label>

        {/* <br />
        <br />

        <label>
          Příjmení:
          <input value="" type="text" />
        </label>

        <br />
        <br />

        <label>
          Křestní jméno:
          <input value="" type="text" />
        </label>

        <br />
        <br />

        <label>
          Telfoní číslo:
          <input value="" type="number" />
        </label>

        <br />
        <br />

        <label>
          Email:
          <input value="" type="text" />
        </label> */}

        <br />
        <br />

        <button>Odeslav formulář</button>
      </form>
    </div>
  );
}
