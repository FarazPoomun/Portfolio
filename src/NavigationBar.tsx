import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './NavigationBar.css';

function NavigationBar(){
    return (
      <>
      <div className='navbar-container'>
        <FontAwesomeIcon icon={faLightbulb} className='theme-switcher' />
        </div>
      </>
    );
}

export default NavigationBar;