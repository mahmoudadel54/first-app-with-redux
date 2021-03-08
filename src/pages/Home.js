import React from 'react'
import Content from '../components/content'
import SideBar from '../components/sideBar'

export default function Home() {
    return (
        <div className="content">

            <h1>Home Page</h1>

            <div className="container">
                <div className="home-grid">

                <Content />
                <SideBar />
                </div>
            </div>
        </div>
    )
}
