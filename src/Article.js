import image from './docs/illustration-thank-you.svg';
import React, { useState } from "react";
import _Input from './Input';

function validateAndChangeBackground(id, str) {
    const backgroundToChange = document.getElementById(id);

    (str === '') && (backgroundToChange.style.backgroundColor = 'red');
}

const Article = () => {
    const [regional, setRegional] = useState('');
    const [controle1, setControle1] = useState('');
    const [controle2, setControle2] = useState('');
    const [nationnal, setNationnal] = useState('');
    const [isbac, setIsbac] = useState(false);

    const handelClick = (e) => {
        const buttons = document.querySelectorAll('.but');

        setRegional('');
        setControle1('');
        setControle2('');
        setNationnal('');
        console.log(e);
        buttons.forEach(button => {
            button.style.backgroundColor = 'hsl(216, 12%, 8%)';
            button.style.borderBottom = 'none';
        });
        e.target.style.backgroundColor = 'hsl(213, 19%, 18%)';
        e.target.style.borderBottom = '2px solid hsl(25, 97%, 53%)';

        if (e.target.id == 'but-1')
            setIsbac(true);
        else {
            setIsbac(false);
        }
    }

    const handelSubmit = (e) => {
        const result = document.getElementById("result");
        
        e.preventDefault();
        validateAndChangeBackground('Regional', regional);
        validateAndChangeBackground('Controle 1', controle1);
        validateAndChangeBackground('Controle 2', controle2);
        (isbac) && (validateAndChangeBackground('Nationnal', nationnal));
        if (isbac) {
            result.textContent = (parseFloat(regional) * 0.25 + ((parseFloat(controle1)
                + parseFloat(controle2)) / 2) * 0.25 + parseFloat(nationnal) * 0.5) + ' / 20';
        } else {
            result.textContent = (20 - (parseFloat(regional) + ((parseFloat(controle1)
                + parseFloat(controle2)) / 2)) / 2) + ' / 20';
        }
    }

    return (
        <article>
            <img src={image} alt="image" />
            <div className='choices'>
                <button id='but-1' className='but' onClick={handelClick}>
                    La note du bac
                </button>
                <button id='but-2' className='but' onClick={handelClick}>
                    La note du national pour réussir
                </button>
            </div>
            <form onSubmit={handelSubmit}>
                {<_Input data={regional} setData={setRegional} label="Regional" />}
                {<_Input data={controle1} setData={setControle1} label="Controle 1" />}
                {<_Input data={controle2} setData={setControle2} label="Controle 2" />}
                {isbac && <_Input data={nationnal} setData={setNationnal} label="Nationnal" />}
                <p id="result">NaN / 20</p>
                <button className='submit'>submit</button>
            </form>
        </article>
    );
}

export default Article;