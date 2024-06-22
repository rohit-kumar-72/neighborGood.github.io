import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ setKeyword, keyword, isBusiness }) {
    return (
        <div style={{ backgroundColor: "#222529" }}>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" style={{ width: "90%", margin: '0 auto' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/technology"}>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sports"}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/entertainment"}>Entertainment</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/business"}>Business</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={isBusiness ? "/business" : "/general"}>{isBusiness ? "Business" : "General"}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/starred-news"}>Starred News</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={""}>Action</Link></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2 searchInput" type="text" value={keyword} placeholder="Search" aria-label="Search"
                                onChange={(e) => setKeyword(e.target.value)} />
                            <button className="btn btn-outline-light" type="button" onClick={(e) => {
                                setKeyword('')
                            }
                            }>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar