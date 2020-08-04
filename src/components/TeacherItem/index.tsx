import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/646454979797118980/mlWJ3SAR_400x400.jpg" alt="Victor Aparecido Barbato Rossi" />
                <div>
                    <strong>Victor Aparecido Barbato Rossi</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /><br />
                Apaixondado por explodir coisas em laboratório e por mudar a vida das pessoas atraves de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;