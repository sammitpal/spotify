import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import { useStateValue } from './StateProvider'
function Header({spotify}) {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
                <Search/>
                <input type="text" placeholder="Search for Artist, Songs"/>

            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
