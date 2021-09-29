export default function UserDetails({ info, fun, rfun, props }) {
  let email =info.email, fname=info.fname, lname=info.lname, doj=info.doj;
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
          <td>{email}</td>
        </tr>
        <tr>
          <th scope="row">First Name</th>
          <td>{fname}</td>
        </tr>
        <tr>
          <th scope="row">Last Name</th>
          <td>{lname}</td>
        </tr>
        <tr>
          <th scope="row">Date of Joining</th>
          <td>{doj}</td>
        </tr>
        <tr>
          <div colSpan="1" className="d-flex gap-3 justify-content-center">
          
            <div type="button">Edit</div>
            <div type="button">Reset Password</div>
            <div type="button" onClick={remove}>Remove</div>
          </div>
        </tr>
      </thead>
    </table>
  );
}
