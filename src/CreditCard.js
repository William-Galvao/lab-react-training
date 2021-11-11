export default function CreditCard(props) {
    let number = props.number;
    let month = (props.expirationMonth).toString().padStart(2, "0");
    let year = (props.expirationYear).toString().slice(-2);
    let bank = props.bank;
    let name = props.owner;
    let bgcolor = props.bgColor;
    let visa = "https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
    let mastercard = "https://www.nicepng.com/png/full/245-2453801_mastercard-logo-png-transparent-background-mastercard-logo.png"
    let cardOperator = props.type;


    return <div className="borderCard" style={{ background: bgcolor }}>
        <div className="cardLogo">
            <img src={cardOperator === "Visa" ? visa : mastercard} alt="card operator logo" width="50" height="auto" />
        </div>
        <div className="cardNumber">
            ●●●● ●●●● ●●●● {number.substr(-4)}
        </div>
        <div className="cardText">
            Expires {month}/{year} {bank}
        </div>
        <div className="cardText">
            {name}
        </div>

    </div>
}