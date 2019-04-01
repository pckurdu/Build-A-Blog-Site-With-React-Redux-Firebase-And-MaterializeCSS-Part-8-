import React from 'react';
//to perform routing
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

//import connect modul
import {connect} from 'react-redux';

const Navbar=()=>{
    return(
        //navbar forming class
        <nav className="nav-wrapper light-blue lighten-2">
            <div className="container">
                <Link to='/' className="brand-logo">Project Blog</Link>
                {/* login is */}
                <SignedInLinks/>
                {/* logout is */}
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

//to be used in connect.
const mapStateToProps=(state)=>{
    console.log(state);
    //have to be return
    return {

    }
}

//we should use connect when exporting the component.
export default connect(mapStateToProps)(Navbar)