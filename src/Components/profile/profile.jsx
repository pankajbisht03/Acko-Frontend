import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Profile = () => {
  return (
   
    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width: "72%", height: "300px" }}>
         <br />
        <h2 style={{marginLeft:"10%"}}>Personal details</h2>
        <br/>
       
        <div style={{borderBottom: "2px solid silver", height: "50px", width: "80%", margin: "auto",padding:"9px",fontSize:"20px", display: "flex"}}>
                <div style={{width: "70%", marginLeft: "5%"}}>Name</div>
                <div style={{width: "20%", border: "1px", height: "auto"}}>Hi, User</div>
                <div style={{width: "5%", border: "1px", height: "auto"}}><FontAwesomeIcon icon="fa-thin fa-pencil" /></div>
        </div>
        <div style={{borderBottom: "2px solid silver", height: "50px", width: "80%", margin: "auto",padding:"9px",fontSize:"20px", display: "flex"}}>
                <div style={{width: "70%", marginLeft: "5%"}}>Mobile NUmber</div>
                <div style={{width: "20%", border: "1px", height: "auto"}}>{}</div>
                <div style={{width: "5%", border: "1px", height: "auto"}}><FontAwesomeIcon icon="fa-thin fa-pencil" /></div>
        </div>
        <div style={{borderBottom: "2px solid silver", height: "50px", width: "80%", margin: "auto",padding:"9px",fontSize:"20px", display: "flex"}}>
            <div style={{width: "70%", marginLeft: "5%"}}>Email Address</div>
            <div style={{width: "20%", border: "1px", height: "auto"}}>{}</div>
            <div style={{width: "5%", border: "1px", height: "auto"}}><FontAwesomeIcon icon="fa-thin fa-pencil" /></div>
        </div>
    
    </div>
  )
}

export default Profile;