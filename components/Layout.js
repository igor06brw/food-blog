import React from 'react'
import Header from './Header'

function Layout({ children }) {
    

    
    return (
        <div className="container mx-auto w-max-content">
            <Header />
            <main>{ children }</main>
        </div>
    )
}

export default Layout
