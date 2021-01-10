import React from 'react'
import './SubMenu.scss'
import { Link } from 'react-router-dom';
import * as InoIcons from 'react-icons/io';
function SubMenu(props) {
    return (
        <div className="subMenu">
            <div className="d-flex d-flex justify-content-between mb-2 px-2 py-1  mb-3 mr-3 border-bottom">
                <div className='title'>
                    <h5>User Details</h5>
                </div>
                <div className="">
                    {props.link &&
                        <Link to={props.link} onClick={props.onClick}>
                            <InoIcons.IoIosAddCircle title="Add" className="CTextColor mr-1 font-weight-bold mb-1" />
                            <span className="CTextColor font-weight-bold">ADD NEW</span>
                        </Link>
                    }
                </div>
                    {props.AddNewBtn && props.handleClick &&
                <div className=''>
                        <span className='CTextColor font-weight-bold' onClick={() => { props.handleClick() }}><i className='fas fa-plus-circle mr-2'></i>Add New</span>
                </div>
                    }
            </div>
        </div>
    )
}

export default SubMenu
