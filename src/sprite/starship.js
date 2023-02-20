import { useSelector } from 'react-redux';
import {StarshipSprite} from './starship.styled.js';

export const Starship = () => {
    const {top, left, fire} = useSelector(state => state.position);
    return (
        <>
            <div class="fire" style={{
                position: "absolute",
                width: fire ? "2px" : 0,
                height: top-10,
                left: left+24,
                backgroundColor: "red",
                top: 10
            }}></div>
            <div style={{
                position: "absolute",
                zIndex: 5,
                top: top,
                left: left,
                backgroundColor: fire ? "orange" : "transparent"
            }}>
            <StarshipSprite/>
            </div>
        </>
    )
}