import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Header, RepositoryInfo, Issues } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

interface RepositoryParams {
    repository_name: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars.githubusercontent.com/u/323530?v=4"
                        alt="Luciano Cordeiro"
                    />
                    <div>
                        <strong>lacsousa/algorithms</strong>
                        <p>Descrição do Repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1000</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>167</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="asdsdf">
                    <div>
                        <strong>aaaaaa</strong>
                        <p>bbbbbbb</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
    //return <h1>Repository : {params.repository_name}</h1>;
};

export default Repository;
