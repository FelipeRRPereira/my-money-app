import '../common/tamplate/dependencies'
import React from 'react'

import Header from '../common/tamplate/header'
import SideBar from '../common/tamplate/sideBar'
import Footer from '../common/tamplate/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)
