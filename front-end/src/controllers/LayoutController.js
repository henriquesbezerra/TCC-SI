import React from 'react';

import Layouts from '../layouts';
import GlobalStyles from '../styles/global';

export default ({name, ...props}) =>{       
    return (<>
        {name ? React.createElement(Layouts[name], {...props}) : null}
        <GlobalStyles />
    </>);        
}