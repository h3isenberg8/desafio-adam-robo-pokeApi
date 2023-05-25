import headerImage from '../../assets/png-clipart-pokemon-logo-pokemon-logo.png'
import { BsGenderAmbiguous } from 'react-icons/bs';
import { GrGrow } from 'react-icons/gr';
import { GiIsland } from 'react-icons/gi';
import { useContext } from 'react';
import { PokemonContext } from '../../providers/pokemonContext';
import { HeaderStyles } from './headerStyles';

export const HeaderComponent = () => {

    const { setSelectedOptions, selectedOptions, manageSelectedOptions } = useContext(PokemonContext);

    return (
        <HeaderStyles>
            <img src={headerImage} alt="logo" />
            <div className='selections'>
                <div className="selections--gender">
                <BsGenderAmbiguous size="2rem" />
                    <select name="gender" onChange={e => {
                        setSelectedOptions({...selectedOptions, gender: String(e.target.value)})

                        manageSelectedOptions(String(e.target.value), null, null)
                        
                    }} id="gender">
                        <option value="all">All gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="genderless">Genderless</option>
                    </select>

                </div>

                <div className="selections--growth-rate">

                    < GrGrow size="2rem" />

                    <select name="growth-rate" id="growth-rate" onChange={e => {
                        
                        setSelectedOptions({...selectedOptions, growthRate: String(e.target.value)})
                        manageSelectedOptions(null,null ,String(e.target.value))
                    }}>
                        <option value="all">All growth-rate</option>
                        <option value="slow">Slow</option>
                        <option value="medium">Medium</option>
                        <option value="fast">Fast</option>
                        <option value="mediumSlow">Medium-slow</option>
                        <option value="slowThenVeryFast">Slow-then-very-fast</option>
                        <option value="fastThenVerySlow">Fast-then-very-slow</option>
                    </select>

                </div>

                <div className="selections--habitats">

                    <GiIsland size="2rem" />

                    <select name="pokemon-habitat" id="pokemon-habitat" onChange={e => {
                             
                        setSelectedOptions({...selectedOptions, habits: String(e.target.value)})
                        manageSelectedOptions(null, String(e.target.value), null)

                    }}>
                        <option value="all">All habitats</option>
                        <option value="cave">Cave</option>
                        <option value="forest">Forest</option>
                        <option value="grassland">Grassland</option>
                        <option value="mountain">Moutain</option>
                        <option value="rare">Rare</option>
                        <option value="roughTerrain">Rought Terrain</option>
                        <option value="sea">Sea</option>
                        <option value="urban">Urban</option>
                        <option value="watersEdge">Waters-Edge</option>
                    </select>
                </div>
            </div>
        </HeaderStyles>
    )



}