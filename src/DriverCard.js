export default function DriverCard(props) {
    let rating = Math.round(Number(props.rating));
    let stars = '';
    let emptyStar = "☆";
    let fullStar = "★";
    if (rating === 0) {
        stars = `${emptyStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`;

    } else if (rating === 1) {
        stars = `${fullStar}${emptyStar}${emptyStar}${emptyStar}${emptyStar}`;

    } else if (rating === 2) {
        stars = `${fullStar}${fullStar}${emptyStar}${emptyStar}${emptyStar}`;

    } else if (rating === 3) {
        stars = `${fullStar}${fullStar}${fullStar}${emptyStar}${emptyStar}`;

    } else if (rating === 4) {
        stars = `${fullStar}${fullStar}${fullStar}${fullStar}${emptyStar}`;

    } else if (rating === 5) {
        stars = `${fullStar}${fullStar}${fullStar}${fullStar}${fullStar}`;
    }


    return <div className="outDriver">
        <div className="driverElement">
            <img className="driverImg" src={props.img} alt="driver" />
        </div>
        <div className="driverElement">
            <p><strong>{props.name}</strong></p>
            <p style={{ fontSize: "30px" }}>{stars}</p>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>
        </div>
    </div>
}