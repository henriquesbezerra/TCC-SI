import React from 'react';

import Layouts from '../layouts';

export default ({name, ...props}) =>{    
    return name ? React.createElement(Layouts[name], {...props}) : null;        
}