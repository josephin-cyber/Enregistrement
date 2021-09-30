export default function FormSample() {
    return (
        <form className="form">
            <fieldset>
                <legend>Informations générales</legend>
                <div>
                    <label htmlFor="email">Adresse email</label><br />
                    <input type="email" id="email" placeholder="Enter email" />
                </div>
                <div>
                    <label htmlFor="nomComplet">Nom complet</label><br />
                    <input type="text" id="nomComplet" placeholder="Enter name" />
                </div>
                <div>
                    <label htmlFor="adresse">Adresse</label><br />
                    <input type="text" id="adresse" placeholder="Enter name" />
                </div>
            </fieldset>
            <fieldset>
                <legend>Carte de Débit/ Credit</legend>
                <div>
                    <label htmlFor="typeCarte">Type de carte</label><br />
                    <select id="typeCarte">
                        <option value="-1">Aucun</option>
                        <option value="debit">Débit</option>
                        <option value="credit">Crédit</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="cardNumber">Numéro de la carte</label><br />
                    <input type="text" id="cardNumber" placeholder="Enter card number" />
                </div>
                <div>
                    <label htmlFor="cvvNumber">Code de sécurité</label><br />
                    <input type="text" id="cvvNumber" placeholder="cvv" />
                </div>
                <div className="expiryDate">
                    <label htmlFor="expiryYear">Date d'expiration</label><br />
                    <div className="year">
                        <select id="yearEl">
                            <option value="-1">Aucun</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                    <div className="month">
                        <select id="monthEl">
                            <option value="-1">Aucun</option>
                            <option value="1">Janvier</option>
                            <option value="2">Février</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            <div className="buttonValidation">
                <button className="submitBtn" type="submit">Envoyer</button>
            </div>
        </form>
    );
}