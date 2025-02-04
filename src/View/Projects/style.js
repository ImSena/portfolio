import styled from "styled-components";

export const ButtonCta = styled.a`
    font-size: 1rem; /* Ajusta o tamanho da fonte para um valor menor */
    padding: 1rem 1.8rem; /* Reduz o padding vertical e horizontal */
    display: inline-flex;
    border: 2px solid ${(props) => props.theme.footer.color};
    color: ${(props) => props.theme.footer.title};
    justify-content: center;
    align-items: center;
    gap: 0.8rem; /* Diminui o espaço entre o ícone e o texto */
    border-radius: 0.6rem; /* Ajusta o raio do border-radius */
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    svg {
        width: 1.6rem; /* Ajusta o tamanho do ícone */
        height: 1.6rem;
    }
`;