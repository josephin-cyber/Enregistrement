import '../styles/confirmation.css';


export default function Confirmation() {
    let rrm = 0;
    function genRandomNumber(min=100000000, max=999999999) {
        // Test Okay
        rrm = parseInt(Math.random() * (max - min) + min);
        console.log(rrm);
        return rrm;
    }
    return (
        <div className="confirm">
            <h1 className="confirmation">Confirmation de paiement</h1>
            <h5>Paiement efféctué avec succès</h5>
            <h5>RRN: {genRandomNumber()}</h5>
            <p className="mt-1"><small>En cas de problème vueillez nous contacter<br/>Via le call center</small></p>
        </div>
    );
}