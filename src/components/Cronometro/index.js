import React, { useState } from 'react';

import CronometroImg from '../../images/cronometro.png';
import './cronometro.css';

const Cronometro = () => {
    const [contador, setContador] = useState(0);
    const [timer, setTimer] = useState(null);
    const [botao, setBotao] = useState('INICIAR');

    const iniciaCronometro = () => {
        if (timer !== null) {
            clearInterval(timer);
            setTimer(null);
            setBotao('CONTINUAR');
        } else {
            setTimer(setInterval(() => {
                setContador(contador => contador + 0.1);
            }, 100));
            setBotao('PAUSAR');
        }
    }

    const limparCronometro = () => {
        if(timer !== null){
            clearInterval(timer);
            setTimer(null);
        }
        setContador(0);
        setBotao('INICIAR');
    }

    return (
        <div className='containerCronometro'>
            <div className='conteudoCronometro'>
                <img className='imagem' src={CronometroImg} alt='Cronometro' />
                <h1>{contador.toFixed(1)}</h1>
                <button onClick={() => iniciaCronometro()}>{botao}</button>
                <button onClick={() => limparCronometro()}>LIMPAR</button>
            </div>
        </div>
    )
}

export default Cronometro;