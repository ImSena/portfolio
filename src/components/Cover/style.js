import styled from "styled-components";

const CoverStyle = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 10000;
    color: white;
    padding: 20px;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;

    transform: ${({ $hideCover }) => ($hideCover ? "translateY(-100%)" : "translateY(0)")};
    opacity: ${({ $hideCover }) => ($hideCover ? "0" : "1")};

    .banner-content {
        z-index: 2;
        max-width: 80%;
        margin: 0 auto;
    }

    .banner h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .banner p {
        font-size: 1.5rem;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2rem;
        animation: bounce 1.5s infinite;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export default CoverStyle;
