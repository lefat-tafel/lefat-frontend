import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
    width: 100%;
    height: var(--navbar-height);
    background-color: var(--color-secondary);

    ul {
        display: flex;
        list-style: none;
        align-items: center;
        justify-content: flex-end;
        margin: 0;
        height: 100%;
        font-weight: bold;

        li {
            margin-right: var(--space-large);
        }

        li > a {
            text-decoration: none;
            color: white;
        }
    }
`;

export const Header = () => {
    return (
        <header>
            <NavBar>
                <ul>
                    <li>
                        <Link to="/registration">Registrieren</Link>
                    </li>
                    <li>
                        <Link to="/about">Über Uns</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>                    
            </NavBar>
        </header>
    );
};
