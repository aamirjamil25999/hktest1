import React, { useState } from "react";
import './App.css';
import Dropdown from "./components/dropdown";
import 'h8k-components';

const title = "Employee Information";
// this is the codebase //

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="country-options">
            <Dropdown options={countryOptions} labelText={'Select Country'} onChange={handleCountryChange} />
          </div >
          <div data-testid="language-options">
            <Dropdown options={languageOptions} labelText={'Select Language'} onChange={handleLanguageChange}/>
          </div>
          <label className="mt-50 text-align-center">
          {selectedCountry ? `Selected Country: ${selectedCountry}` : "No country selected"}
          </label>
          <label className="mt-10 finalText" data-testid="country-selected">
          {selectedLanguage ? `Selected Language: ${selectedLanguage}` : "No language selected"}
          </label>
          <label className="mt-10 finalText" data-testid="language-selected">
            
          </label>
        </section>
      </div>
    </>
  );
}

const countryOptions = [
  'Select country',
  'USA',
  'Germany',
  'France',
  'Canada',
  'India',
  'Poland',
  'Japan',
  'Spain',
  'Australia'
];

const languageOptions = [
  'Select language',
  'English',
  'Spanish',
  'French',
  'German'
]

export default App;
