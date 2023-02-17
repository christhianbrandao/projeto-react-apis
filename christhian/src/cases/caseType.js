import bug from '../img/bug.png'
import fire from '../img/fire.png'
import flying from '../img/flying.png'
import poison from '../img/poison.png'
import water from '../img/water.png'
import grass from '../img/grass.png'
import normal from '../img/normal.png'
import electric from '../img/electric.png'
import dark from '../img/dark.png'
import dragon from '../img/dragon.png'
import fairy from '../img/fairy.png'
import fighting from '../img/fighting.png'
import ghost from '../img/ghost.png'
import ground from '../img/ground.png'
import ice from '../img/ice.png'
import psychic from '../img/psychic.png'
import rock from '../img/rock.png'
import steel from '../img/steel.png'


export const caseType = (type)=>{
    switch(type){
        case "bug":
            return bug;
        case "flying":
            return flying;
        case "poison":
            return poison;
        case "water":
            return water;
        case "grass":
            return grass;
        case "normal":
            return normal;
        case "fire":
            return fire;
        case "electric":
            return electric ;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "ghost":
            return ghost;
        case "ice":
            return ice;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "ground":
            return ground;
        default:
            return "";
    }
}