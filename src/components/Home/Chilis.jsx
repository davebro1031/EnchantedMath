import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

export default function Chilis({ rating }){
    return (
        Array.from({ length: rating }, (_, i) => i).map(el => (
            <FontAwesomeIcon key={el} icon={faPepperHot} />
        ))
    )
}