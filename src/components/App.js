import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import countries from '../countries.json';

import Navbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetail from './CountryDetail';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            {/* ":cca3" é o nome do nosso parâmetro de rota, que vai ser disponibilizado dentro de CountryDetails através do hook UseParams */}
            <Route
              path="/:cca3"
              element={<CountryDetail countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
