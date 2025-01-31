import styled from 'styled-components';

const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    text-align: center;
    margin-top: 4rem;
    margin-bottom:  15rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;

    p{
        font-size: 1.2rem;
        color: ${(props) => props.theme.paragraph};
        font-weight: 400;
    }

    @media (max-width: 768px) {
        padding: 0 2rem;
        margin-bottom: 8rem;
    }
`;

export default SectionStyled;