import React, { useState } from "react";
import { Tabs, Tab, Dropdown } from "react-bootstrap";
import UserDetails from "../UserDetails/UserDetails";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EditMode from "../UserDetails/EditMode";
import Data from "../UserData";
import "../styles.css";

export default function UserTab() {
  const [key1, setKey1] = useState("home");

  const [details, setdetails] = useState(Data)
  function RemoveObject(y) {
    let RemoveUserArray = details.filter(r => r.email != y.email)
    setdetails(RemoveUserArray);
    setKey1("home")
  }

  function updatearray(x) {

    let modifieUserObject = details.map(item => {
      if (item.email == x.email) {
        item.fname = x.fname;
        item.lname = x.lname;
        item.doj = x.doj
      }
      return item;
    })
    setdetails(modifieUserObject);
  }

  const onusernameclick = (rowData, IsEditMode) => {
    setKey1(rowData.email)

    let detailsModified = details.map(item => {
      if (item.email == rowData.email) {
        item.isSelected = true;
        item.isEditMode = IsEditMode;
      }
      return item;

    })
    setdetails(detailsModified);
    // console.log(detailsModified)
  }

  return (
    <div className="container shadow my-4">

      <Tabs
        id="controlled-tab-example"
        activeKey={key1}
        onSelect={(k) => setKey1(k)}
        className="mb-1 alert alert-primary"

      >
        <Tab eventKey="home" title="Home">
          <table class="table table-striped table-borderless">
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
                      <div type="button" onClick={(e2) => {
                        onusernameclick(item, false)
                        // e1 = e2.target.innerHTML;
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
                          onusernameclick(item, true)

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
                              onusernameclick(item, true)

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
        </Tab>
        {
          details.filter(item => item.isSelected).map(item => {
            return (

              <Tab key={`tab_${item.email}`} eventKey={item.email} key1={item.email}
                title={item.email}>
                <>
                  {item.isEditMode ?

                    <EditMode info={item} fun={(x) => { updatearray(x) }} rfun={(y) => { RemoveObject(y) }} />

                    :

                    <UserDetails info={item} efun={(e2) => { onusernameclick(e2, true) }} rfun={(y) => {
                      RemoveObject(y)
                    }} />}

                </>
              </Tab>
            )

          }
          )
        }
      </Tabs>
    </div>
  );

}
