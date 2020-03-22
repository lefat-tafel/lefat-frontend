import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components';

export const Button = styled(MaterialButton)`
    background: var(--color-secondary);
    color: white;
    border-radius: 35px;
    font-size: 2rem;
    padding: 0.5rem 2rem;
    text-transform: none;

    :hover {
        background: var(--color-secondary);
    }
`;
