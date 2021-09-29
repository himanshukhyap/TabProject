import { useState } from "react";
import Data from "../UserData";

import { BiDotsVerticalRounded } from "react-icons/bi";



import { Dropdown } from "react-bootstrap";

import "../styles.css";
export default function Tab() {
    const [details, setdetails] = useState(Data)
    const [tabSelected, setSelected] = useState("Home")



    // function RemoveObject(y) {
    //     let RemoveUserArray = details.filter(r => r.email != y.email)
    //     setdetails(RemoveUserArray);
    //     setKey1("home")
    //   }

    //   function updatearray(x) {

    //     let modifieUserObject = details.map(item => {
    //       if (item.email == x.email) {
    //         item.fname = x.fname;
    //         item.lname = x.lname;
    //         item.doj = x.doj
    //       }
    //       return item;
    //     })
    //     setdetails(modifieUserObject);
    //   }

    const onusernameclick = (rowData) => {
        let detailsModified = details.map(item => {
            if (item.email == rowData.email) {
                item.isSelected = true;
            }
            return item;
        })
        setdetails(detailsModified);
    }



    return (
        <>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        onClick={() => { setSelected("Home") }}
                    >
                        User
                    </button>
                </li>
                {
                    details.filter(f => f.isSelected).map(item => {
                       
                        return (
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                    onClick={() => { setSelected(item.email) }}

                                >
                                    {item.email}

                                </button>
                            </li>
                        )
                    })
                }

            </ul>

            <div className="tab-content" id="myTabContent">
                <div
                    className={`tab-pane fade ${tabSelected === "Home" ? "show active" : ""} `}
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
                                                <button className="border-0 bg-light" onClick={(e2) => {
                                                    onusernameclick(item)

                                                }}>Edit</button>





                                                <Dropdown className="DropdownDot">
                                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                                        <BiDotsVerticalRounded />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1" onClick={(y) => {
                                                            RemoveObject(
                                                                item)

                                                        }}>Remove</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2" onClick={(e2) => {
                                                            onusernameclick(item)

                                                        }}>Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
                {
                    details.filter(f=>f.isSelected).map((item) => {
            //    {  console.log(item)}
            
            return(
                        <div
                            // className="tab-pane fade show active"
                            className={`tab-pane fade ${tabSelected === item.email ? "show active" : "dfd"} `}
                            
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                        >
                            {item.email}
                        </div>
            )
                    })

                }
            </div>
        </>
    );
}
