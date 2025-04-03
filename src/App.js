import React, { useState } from "react";
import './App.css';
import Dropdown from "./components/dropdown";

const title = "Employee Information";
// this is the codebase /

function App() {
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  }
  return (
    <div>
      <Dropdown options={countryOptions} labelText={countryOptions} onChange={handleCountryChange}/>
      <Dropdown options={languageOptions} labelText={languageOptions} onChange={handleLanguageChange}/>
      <br></br>
      <label>{country ? `Selected Country: ${country}` : 'No Country Selected'}</label>
      <br></br>
      <br></br>
      <label>{language ? `Selected Country: ${language}` : 'No Country Selected'}</label>

    </div>
  )
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
