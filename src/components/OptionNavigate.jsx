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
                <li key={randomId()} className="nav-item">
                  <a onClick={() => {
                  props.setOptionActive(index)
                  
                }} className={`nav-link ${props.optionActive == index ? "active" : ""}`} aria-current="page" href="#">
                    {option.name}
                  </a>
                  <span style={{cursor: "pointer"}} onClick={() => {
                    props.setNameEdit(option.name)
                    props.setOptionActive(index)
                  }} data-toggle="modal" data-target="#exampleModal">Edit</span>
                  <span onClick={() => {
                    if(window.confirm("Xóa OK?")) {
                      props.setOptionActive(index)
                      props.deleteOptions(index);
                    }
                  }} style={{margin: "0 10px", cursor: "pointer"}}>Delete</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <button type='button' onClick={() => {
        props.addOptions();
      }}>Thêm</button>
    </div>
  )
}
