import { useState } from "react";
import countries from "./countries";
import '../styles/auth.css';
import { useHistory } from "react-router-dom";

export default function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
    
  const history = useHistory();

  const handleSubmit = (event) => {
    alert('');
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
     
  
    event.preventDefault();
  }

  



  return (
    <form onSubmit={handleSubmit} id="create-auth-form">
      <h1>Login</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Mot de passe:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Pays:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service        
      </label>

      <button onClick={() =>history.push('/Formulaire')}>Submit</button>
      <button > Reset</button>
    </form>
  );
}