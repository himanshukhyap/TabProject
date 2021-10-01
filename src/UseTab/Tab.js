import { useState } from "react";
import Data from "../UserData";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";



import { Container, Dropdown } from "react-bootstrap";

import "../styles.css";
import EditMode from "../UserDetails/EditMode";
import UserDetails from "../UserDetails/UserDetails";
export default function Tab() {
    const [details, setdetails] = useState(Data)
    const [tabSelected, setSelected] = useState("Home")

    const onusernameclick = (rowData) => {

        setSelected(rowData.email)
        let detailsModified = details.map(item => {
            if (item.email == rowData.email) {
                item.isSelected = true;
                item.isEditMode = false;
            }
            return item;
        })
        setdetails(detailsModified);
    }
    const forclose = (rowData) => {

        let detailsModified = details.map(item => {
            if (item.email == rowData.email) {
                item.isSelected = false;
                item.isEditMode = false;

            }
            return item;
        })

        setdetails(detailsModified)
        setSelected("Home")

    }
    function updatearray(updatedata) {
        let detailsModified = details.map(item => {
            if (item.email == updatedata.email) {
                item.fname = updatedata.fname;
                item.lname = updatedata.lname;
                item.doj = updatedata.doj
            }
            return item;
        })
        setdetails(detailsModified);
    }
    function RemoveObject(removedata) {

        let RemoveUserArray = details.filter(r => r.email != removedata.email)
        setdetails(RemoveUserArray);
        setSelected("Home")

    }

    function edit(rowData) {
        setSelected(rowData.email)
        let detailsModified = details.map(item => {
            if (item.email == rowData.email) {
                item.isSelected = true;
                item.isEditMode = true;
            }
            return item;
        })
        setdetails(detailsModified);

    }

    return (
        <div className="container shadow my-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist" >
                <li className="nav-item" role="presentation">
                    <button
                        className={`border-0 p-2  ${tabSelected == "Home" ? "bg-dark text-white" : "bg-light text-dark"}`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected={`${tabSelected == "Home" ? true : false}`}
                        onClick={() => {

                            setSelected("Home")
                        }}
                    >
                        User
                    </button>
                </li>
                {/* tab loop */}
                {
                    details.filter(f => f.isSelected).map(item => {
                        return (
                            <li className="nav-item mx-2" role="presentation">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button
                                        className={`border-0 p-2  ${tabSelected == item.email ? "bg-dark text-white" : "bg-light text-dark"}`}
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected={`${tabSelected == item.email ? true : false}`}
                                        onClick={() => {

                                            setSelected(item.email)
                                        }}>
                                        <span>{item.email}</span>


                                    </button>
                                    <div className="nav-link px-1" onClick={() => { forclose(item) }}>
                                        <GrFormClose size={20} color="#fff" />
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

                {/* tab loop */}
            </ul>
            <div className="tab-content" id="myTabContent">
                {/* Home Content */}
                <div
                    className={`tab-pane fade ${tabSelected == "Home" ? "show active" : ""} `}
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >

                    <table className="table table-striped table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Date of Joining</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {details.map(item => {
                                return (
                                    <tr key={`tr_${item.email}`}>
                                        <td>
                                            <div type="button" className="" onClick={() => {
                                                onusernameclick(item)
                                            }}>
                                                {item.email}
                                            </div>
                                        </td>
                                        <td>  {item.fname} </td>
                                        <td>  {item.lname}</td>
                                        <td>  {item.doj}</td>
                                        <td>
                                            <div className="d-flex gap-1">
                                                <button className="border-0 bg-light" onClick={() => {

                                                    edit(item)

                                                }}>Edit</button>





                                                <Dropdown className="DropdownDot">
                                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                                        <BiDotsVerticalRounded />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" onClick={(y) => {
                                                            RemoveObject(item)

                                                        }}>Remove</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2" onClick={(e2) => {
                                                            edit(item)

                                                        }}>Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3" onClick={() => alert("rest")}>Rest Password</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                {/* Home Content */}

                {/* other tab content */}
                {
                    details.filter(f => f.isSelected).map((item) => {
                        return (
                            <div

                                className={`tab-pane fade ${tabSelected === item.email ? "show active" : "dfd"} `}
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                {item.isEditMode ?
                                    <EditMode info={item} ufun={(updatedata) => { updatearray(updatedata) }} rfun={(removedata) => { RemoveObject(removedata) }} />
                                    :
                                    <UserDetails info={item} rfun={(removedata) => {
                                        RemoveObject(removedata)
                                    }} efun={(editclickdata) => { edit(editclickdata) }} />
                                }
                            </div>
                        )
                    })

                }

                {/* other tab content */}
            </div>
        </div>
    );
}
