import React from "react";
import {  FiChevronRight } from 'react-icons/fi';
import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>


            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/323530?v=4" 
                    alt="Luciano Cordeiro" />
                <div>
                    <strong>lacsousa/algorithms</strong>
                    <p>Khan Academy and other platforms 🚀🚀🚀</p>
                </div>
                <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/323530?v=4" 
                    alt="Luciano Cordeiro" />
                <div>
                    <strong>lacsousa/algorithms</strong>
                    <p>Khan Academy and other platforms 🚀🚀🚀</p>
                </div>
                <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/323530?v=4" 
                    alt="Luciano Cordeiro" />
                <div>
                    <strong>lacsousa/algorithms</strong>
                    <p>Khan Academy and other platforms 🚀🚀🚀</p>
                </div>
                <FiChevronRight size={20}/>
                </a>

            </Repositories>
        </>
    );
};

export default Dashboard;
