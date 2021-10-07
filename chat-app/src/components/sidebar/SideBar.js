import React from 'react'
import Groups from './Groups'
import NavBar from './NavBar'
import Search from './Search'

export default function SideBar() {
    return (
        <>
            <NavBar />
            <Search />
            <Groups />
        </>
    )
}
