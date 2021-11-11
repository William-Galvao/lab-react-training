export default function Random(props) {
    let min = props.min;
    let max = props.max;
    let result = Math.floor(min + Math.random() * (max + 1 - min));

    return <div className="borderLang">
        Random value between {min} and {max} => {result}
    </div>
}