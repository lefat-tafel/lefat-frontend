import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Typography, AppBar, Toolbar as MaterialToolbar } from '@material-ui/core';

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
);

const Toolbar = styled(MaterialToolbar)`
    ul, li {
        list-style: none;
    }

    a {
        color: white;
        text-decoration: none;
        :hover {
            text-decoration: none;
        }

        span {
            font-weight: 700;
        }

        margin-right: 3rem;
    }
`;

export const Header = () => {
    return (
        <AppBar position="static" color="secondary">
          <Toolbar style={{ justifyContent: 'flex-end',  }}>
            <NavItem url="/registration" label="Registrieren" />
            <NavItem url="/about" label="Über Uns" />
            <NavItem url="/contact" label="Kontakt" />
          </Toolbar>
        </AppBar>
    );
};
