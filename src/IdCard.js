export default function IdCard(props) {
    const options = {
        weekday: "short", year: "numeric", month: "short",
        day: "numeric"
    };
    return <div className="main">
        <div className="left">
            <img src={props.picture} alt="profile face" />
        </div>

        <div className="right">
            <p><strong>First Name: </strong>{props.firstName}</p>
            <p><strong>Last Name: </strong>{props.lastName}</p>
            <p><strong>Gender: </strong>{props.gender}</p>
            <p><strong>Height: </strong>{props.height}</p>
            <p><strong>Birth: </strong>{props.birth.toLocaleDateString('en-US', options)}</p>
        </div>

    </div>
}