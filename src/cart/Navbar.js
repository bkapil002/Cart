import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

    const value = useSelector(state => state.value)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to ='/cart' className='cart'>
                            <i style={{ fontSize: '25px', position: 'relative' , cursor:'pointer' }} className="fa-solid fa-cart-shopping">
                                    <div style={{ position: 'absolute', fontSize: '10px', top: '-2px', left: '22px', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'red', textAlign: "center", height: "15px", width: '15px', borderRadius: '50%' }} className='number'>
                                  {value}
                                     </div>
                                </i>

                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
