import React from 'react'
import { randomId } from '@mieuteacher/meomeojs';

export default function OptionNavigate(props) {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              props.options.map((option, index) => (
                <li onClick={() => {
                  props.setOptionActive(index)
                }} key={randomId()} className="nav-item">
                  <a className={`nav-link ${props.optionActive == index ? "active" : ""}`} aria-current="page" href="#">
                    {option.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
