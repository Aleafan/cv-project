import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import flagRu from '../assets/RU.png';
import flagGb from '../assets/GB.png';

const Header = (props) => {
    let button;
    if (props.language === 'ru') {
        button = <button className='btn-lang' type='button' onClick={props.changeLanguage}>EN 
                    <img className='flag-img' src={ flagGb } alt='Flag of Great Britain' />
                 </button>
        
    } else {
        button = <button className='btn-lang' type='button' onClick={props.changeLanguage}>RU 
                    <img className='flag-img' src={ flagRu } alt='Flag of Russia'/>
                 </button>;
    }
    return (
        <header>
            <h1>
                <FontAwesomeIcon icon={faAddressCard} />
                CV Builder
            </h1>
            { button }            
        </header>
    );
}

export default Header;