import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

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
interface NavItemProps {
    url: string;
    label: string;
}

const NavItem = (props: NavItemProps) => (
    <li>
        <Link to={props.url}>
            <Typography variant="h5" component="span">
                {props.label}
            </Typography>
        </Link>
    </li>
)

export const Header = () => {
    return (
        <header>
            <NavBar>
                <ul>
                    <NavItem url="/registration" label="Registrieren" />
                    <NavItem url="/about" label="Über Uns" />
                    <NavItem url="/contact" label="Kontakt" />
                    <NavItem url="/recipientForm" label="Hilfe anfordern" />
                </ul>                    
            </NavBar>
        </header>
    );
};
