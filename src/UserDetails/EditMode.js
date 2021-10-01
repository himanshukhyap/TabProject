import { useState } from "react"

export default function EditMode({ info, ufun, rfun, props }) {
    let email =info.email, fname=info.fname, lname=info.lname, doj=info.doj;
console.log(info)
console.log(ufun)
console.log(rfun)

    const [EditData, setEditData] = useState(info)
    

    const update = () => {
       
        ufun({
            email: email,
            fname: fname,
            lname: lname,
            doj: doj

        })
    }

    const remove=()=>
    {
        rfun({
            email: email,
            fname: fname,
            lname: lname,
            doj: doj

        })
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="row">Email</th>
                    <td> <input className="w-75 border-0" id="email" type="text" defaultValue={EditData.email} readOnly/></td>
                </tr>
                <tr>
                    <th scope="row">First Name</th>
                    <td><input className="w-75 border-0" id="fname" type="text" defaultValue={EditData.fname} onChange={(event) => { fname = event.target.value; }} /></td>
                </tr>
                <tr>
                    <th scope="row">Last Name</th>
                    <td><input className="w-75 border-0" id="lname" type="text" defaultValue={EditData.lname} onChange={(event) => { lname = event.target.value; }} /></td>
                </tr>
                <tr>
                    <th scope="row">Date of Joining</th>
                    <td><input className="w-75 border-0" id="doj" type="text" defaultValue={EditData.doj} onChange={(event) => { doj = event.target.value; }} /></td>
                </tr>
                <tr>
                    <td>
                    <div colSpan="1" className="d-flex gap-3 justify-content-center">
                        <div type="button" onClick={update}>Update</div>
                        <div type="button" onClick={() => { alert("reset") }}>Reset Password</div>
                        <div type="button" onClick={remove}>Remove</div>
                    </div>
                        </td>
                </tr>
            </thead>
        </table>
    );
}
