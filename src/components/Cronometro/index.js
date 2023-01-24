import React from 'react';

import CronometroImg from '../../images/cronometro.png';
import './cronometro.css';

const Cronometro = () => {
    return(
        <div className='containerCronometro'>
            <div className='conteudoCronometro'>
                <img className='imagem' src={CronometroImg} alt='Cronometro'/>
            </div>
        </div>
    )
}

export default Cronometro;