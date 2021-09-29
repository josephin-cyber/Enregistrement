import Myform from './form2';
import MyDatepic from './Datepicker';


const Formulaire = ()=>{

return(

<div style={{paddingTop : 60}}>

<h1 className="well" style={{textAlign:'center'}}>Formulaire mode de paiement</h1>

  <Myform/>
  <MyDatepic/>

</div>
  
);

}

export default Formulaire;
