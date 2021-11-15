import { useParams, Link } from 'react-router-dom';

function CountryDetail(props) {
  // Extraindo o parâmetro de rota da URL
  const { cca3 } = useParams();

  const foundCountry = getCountryNameFromCode(cca3);

  function getCountryNameFromCode(cca3) {
    return props.countries.find(
      (currentCountryObj) => currentCountryObj.cca3 === cca3
    );
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {foundCountry.capital.map((currentCapitalStr) => {
              return <td key={currentCapitalStr}>{currentCapitalStr}</td>;
            })}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="list-unstyled">
                {foundCountry.borders.map((currentBorderStr) => {
                  return (
                    <li key={currentBorderStr}>
                      <Link to={`/${currentBorderStr}`}>
                        {getCountryNameFromCode(currentBorderStr).name.common}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
