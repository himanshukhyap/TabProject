import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { AiOutlineClose } from "react-icons";
import UserDetails from "../UserDetails/UserDetails";

import EditMode from "../UserDetails/EditMode";
import user1, { user2 } from "../UserData";
import { render } from "react-dom";
import Data from "../UserData";
let x;
export default function UserTab() {
  const [key, setKey] = useState("home");

  const [details, setdetails] = useState(Data)

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
    <>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
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
                      <div type="button" onClick={() => {
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
                          onusernameclick(item)
                        }}>Edit</button>
                        <button className="border-0 bg-light">...</button>
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

              <Tab key={`tab_${item.email}`} eventKey={item.email} title={item.email}>
                {/* <UserDetails info={item} /> */}
                <EditMode info={item} fun={(x) => { updatearray(x) }} />
              </Tab>
            )

          }
          )
        }
      </Tabs>
    </>
  );

}
