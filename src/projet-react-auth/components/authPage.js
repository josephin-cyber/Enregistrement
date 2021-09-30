// import { useState } from "react";
import countries from "./countries";
import '../styles/auth.css';
// import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Auth() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [country, setCountry] = useState("");
  // const [acceptedTerms, setAcceptedTerms] = useState(false);
    
  // const history = useHistory();
  const { register, handleSubmit,formState: { errors } } = useForm();

  // const handleSubmit = (event) => {
  //   console.log(`
  //     Email: ${email}
  //     Password: ${password}
  //     Country: ${country}
  //     Accepted Terms: ${acceptedTerms}
  //   `);
    
  // }

  
  const onSubmit= data => console.log(data)



  return (
    <form onSubmit={handleSubmit(onSubmit)} 
    // id="create-auth-form"
    >
      <h1>Login</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          // required 
          {...register("email",{required:true})}
          />
           {errors.email && <span>Veuillez introduire le mail</span>}
      </label>
      
      <label>
        Mot de passe:
        <input
          name="password"
          type="password"
          {...register("password",{required:true ,pattern: /[0-9]/})}
          
          // value={password}
          
          // onChange={e => setPassword(e.target.value)}
          // required 
          />

          {errors.password && errors.password.type === "required" && <span>Veuillez introduire le mot de passe</span>}
          {errors.password && errors.password.type === "pattern" && <span>Le mot de passe doit être uniquement des chiffres</span>}

      </label>
      <label>
        Pays:
        <select
          name="country"
          // value={country}
          // onChange={e => setCountry(e.target.value)}
          // required
          {...register("country",{required:true})}
          >
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
        {errors.email && <span>Veuillez introduire le mot de passe</span>} 
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          // onChange={e => setAcceptedTerms(e.target.value)}
          // required 
          {...register("acceptedTerms",{required:true})}
          />
        I accept the terms of service        
      </label>

      <input 
      // onClick={() =>history.push('/Formulaire')}
      type="submit"
     />Submit
      {/* <button > Reset</button> */}
    </form>
  );
}