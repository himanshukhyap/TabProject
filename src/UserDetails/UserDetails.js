export default function UserDetails(props) {
 
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="row">Email</th>
          <td>{props.info.email}</td>
        </tr>
        <tr>
          <th scope="row">First Name</th>
          <td>{props.info.fname}</td>
        </tr>
        <tr>
          <th scope="row">Last Name</th>
          <td>{props.info.lname}</td>
        </tr>
        <tr>
          <th scope="row">Date of Joining</th>
          <td>{props.info.doj}</td>
        </tr>
        <tr>
          <div colSpan="1" className="d-flex gap-3 justify-content-center">
          
            <div type="button">Edit</div>
            <div type="button">Reset Password</div>
            <div type="button">Remove</div>
          </div>
        </tr>
      </thead>
    </table>
  );
}
