import React, { useState } from "react";
import { Tabs, Tab, Dropdown } from "react-bootstrap";
import UserDetails from "../UserDetails/UserDetails";
import { BiDotsVerticalRounded } from "react-icons/bi";
import EditMode from "../UserDetails/EditMode";
import Data from "../UserData";
import "../styles.css";
let e1 = "", e2 = "";
export default function UserTab() {
  const [key1, setKey1] = useState("home");

  const [details, setdetails] = useState(Data)
  function RemoveObject(y) {
    let RemoveUserArray = details.filter(r => r.email != y.email)
    setdetails(RemoveUserArray);
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

  const onusernameclick = (rowData) => {
    setKey1(rowData.email)

    let detailsModified = details.map(item => {
      if (item.email == rowData.email) {
        item.isSelected = true;
      }
      return item;

    })
    setdetails(detailsModified);
    // console.log(detailsModified)
  }

  return (
    <div className="conatiner bg-light">

      <Tabs
        id="controlled-tab-example"
        activeKey={key1}
        onSelect={(k) => setKey1(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <table className="table">
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
                        onusernameclick(item)
                        e1 = e2.target.innerHTML;
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
                          e1 = e2.target.innerHTML;
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
                          e1 = e2.target.innerHTML;
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

              <Tab key={`tab_${item.email}`} eventKey={item.email} key1={item.email} title={item.email}>




                <>
                  {e1 == "Edit" ?

                    <EditMode info={item} fun={(x) => { updatearray(x) }} rfun={(y) => { RemoveObject(y) }} />

                    :

                    <UserDetails info={item} rfun={(y) => { RemoveObject(y) }} />}

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
