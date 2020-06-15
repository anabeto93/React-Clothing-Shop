import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'


const Directory = ({ titles }) => (
    <div className="directory-menu">
    {
        titles.map(title => <MenuItem title={title}/>)
    }
    </div>
)

export default Directory;
