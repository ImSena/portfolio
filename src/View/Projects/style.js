import styled from "styled-components";

export const ButtonCta = styled.a`
    font-size: 1rem; 
    padding: 1rem 1.8rem;
    display: inline-flex;
    border: 2px solid ${(props) => props.theme.footer.color};
    color: ${(props) => props.theme.footer.title};
    justify-content: center;
    align-items: center;
    gap: 0.8rem; 
    border-radius: 0.6rem; 
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    svg {
        width: 1.6rem;
        height: 1.6rem;
    }
`;

export const ContainerParagraph = styled.div`
    p{
        margin-bottom: 2rem;
    }
`;