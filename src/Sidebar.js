import { Home, LibraryMusic, Search } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useStateValue } from './StateProvider'
function Sidebar() {
    const [{playlists}] = useStateValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
            <SidebarOption title="Home" Icon={Home}/>
            <SidebarOption title="Search" Icon={Search}/>
            <SidebarOption title="Library" Icon={LibraryMusic}/>
            <br/>
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar
