import React from 'react'
import './header.css'

function Header() {
    return (
        <>
            <div className='row border-bottom'>
                <div className='col-md-4'>
                    <img src='http://ttdc.in/DeptLogin/BoatDepartment/images/TTDCLogo.svg' alt='ttdc-logo' style={{ height: '80px', width: "460px" }}></img>
                </div>
                <div className='col-md-3 d-flex align-items-center justify-content-center'>
                    <span className='sp-2'>Welcome User..!</span>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <span className='sp-1'>USER PORTAL</span>
                </div>
            </div>
        </>
    )
}
export default Header
