export default function BoxColor(props) {
    let r = props.r;
    let g = props.g;
    let b = props.b;

    return <div style={{
        height: "100px",
        background: `rgb(${r}, ${g}, ${b})`,
        margin: "50px",
        border: "2px solid black",
        textAlign: "center",
        paddingTop: "25px",
        fontWeight: "bold"
    }}>
        rgb({r}, {g}, {b})<br />
        #{((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}

    </div >

}
