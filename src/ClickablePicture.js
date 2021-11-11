import { useState } from 'react'

function ClickablePicture(props) {

    const [valor, setValue] = useState({ toggleImg: true });

    function handleClick() {

        setValue({ toggleImg: !valor.toggleImg });
    }


    return (

        < img onClick={handleClick} alt="Um francês qualquer" src={valor.toggleImg ? props.img : props.imgClicked} />



    );

}


export default ClickablePicture