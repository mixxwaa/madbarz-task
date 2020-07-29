import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
html {
    ${'' /* font-size: 62.5%; */}
    box-sizing: border-box;
    }
}
body {
    font-family: 'Roboto', sans-serif;
    line-height: 20px;
    font-style: "normal";
    font-weight: "normal";
    letter-spacing: -0.24px;
    max-width: 100%;
    max-height: 100%;
    overflow-x: hidden;
}
`;
