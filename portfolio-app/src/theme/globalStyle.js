import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Cabin');

    body {
        font-family: 'Cabin', sans-serif;
        font-size: 24px;
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`