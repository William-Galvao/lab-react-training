
export default function Rating(props) {
    let rating = Math.round(Number(props.children));
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
    return <div style={{ margin: "60px", fontSize: "60px" }}>{stars}</div>
}