import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import './Player.css'
import Footer from './Footer'
function Player({spotify}) {
    return (
        <div class="player">
            <div className="player_body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
