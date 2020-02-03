import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = () => {
    return (
        <nav className="nav.nav-wrapper.grey.darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Matthew</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Navbar)