import React from 'react'

export default function OptionNavigate() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                Options 1
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Options 2
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
