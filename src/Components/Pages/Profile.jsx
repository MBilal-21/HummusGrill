import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import person from "../../Assets/person.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const [passError, setPassError] = useState(null);
  const [profileError, setProfileError] = useState(null);
  {
    /*-- suecess color  #00800050  -- warning color #ff000050*/
  }
  const successColor = "#00800050"
  const warningColor = "#ff000050"
  const [bgPassColr, setbgPassColr] = useState(successColor);
  const [bgProfileColr, setbgProfileColr] = useState(warningColor);
  const navigate = useNavigate();
  const [passChange, setPassChange] = useState({
    oldPass: "",
    newPass: "",
    comfirmPass: "",
  });
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    promoMsg: true,
    orderStatus: true,
    profilePhoto: person,
  });

  const [user, setUser] = useState(()=>{
    const u = JSON.parse(localStorage.getItem("user"))
    return  u ? u : null
  });
  JSON.parse(localStorage.getItem("user"));






  useEffect(() => {
  
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setProfileData({...user});
    }
    else{
      navigate("/login");
    }
  }, []);
  const closeError = (setError) =>{
      setError(null);
  }

  // onChange profile data for change
  const handleProfileChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setProfileData((preState) => ({ ...preState, [name]: newValue }));
  };
  // onChange password data for change
  const handlePassChange = (e) => {
    setPassChange((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  // onsubmit profile data
  const handleProfile = (e) => {
    e.preventDefault();
    if (window.confirm(`${profileData.firstName} are you want sucessfully change data`)) {
      
      let pfdata = {...profileData};
     
      localStorage.setItem("user", JSON.stringify(pfdata));
      setUser(pfdata);
      setProfileError("Profile data has been updated successfully");
      setbgProfileColr(successColor)
    }else{
      setProfileError("Profile data has not been updated");
      setbgProfileColr(warningColor);
    }
    setTimeout(()=>{closeError(setProfileError)},8000)
  
  };
  // onsubmit password data
  const handlePassword = (e) => {
    e.preventDefault();
    let psdata = {...passChange};
    let udata = JSON.stringify(localStorage.getItem("user"));
   
    if (passChange.newPass !== passChange.comfirmPass) {
      setPassError("Password does not match");
      setbgPassColr(warningColor);
    } 
   else if (udata.password !== passChange.oldPass) {
      setPassError("Old Password is In correct");
      setbgPassColr(warningColor);
    
    } else {
      udata.password = psdata.newPass;
      localStorage.setItem("user", JSON.stringify(udata));
      setPassError("password has been updated succesfully");
      setbgPassColr(successColor);
    }

    setTimeout(()=>{closeError(setPassError)},8000)
    }
  


  return (
    <Col xs={12} md={9} lg={10}>
      <Row>
        {/* error for Profile */}
        {profileError && (
          <Col md={12}>
            <div className="profileError" style={{ background: bgProfileColr }}>
              <div className="d-flex justify-content-between">
                <h5></h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={() => {
                    setProfileError(null);
                  }}
                ></button>
              </div>
              <div>
                <span>
                  {profileError}
                </span>
              </div>
            </div>
          </Col>
        )}
        {/* Error for password */}
        {passError && (
          <Col md={12}>
            <div className="passError" style={{ background: bgPassColr }}>
              <div className="d-flex justify-content-between">
                <h5></h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={() => {
                    setPassError(null);
                  }}
                ></button>
              </div>
              <div>
                <span>
                  {passError}
                </span>
              </div>
            </div>
          </Col>
        )}
      </Row>
      <div className="overview">
        <Row>
          <Col lg={12} className="mb-3 ">
            {/* profile page start */}
            <h5>Profile</h5>
            <div className="userInfo">
              <img src={person} alt="profile" width={115} height={115} />
              <div className="media">
                <h4>{user?.firstName + " " + user?.lastName}</h4>
                <p className="m-0">
                  <MailIcon className="text-warning fs-6" />{" "}
                  <span>{user?.email}</span>
                </p>
                <p className="m-0">
                  <PhoneIcon className="text-warning fs-6" />
                  <span> {user?.phoneNumber}</span>{" "}
                </p>
                <p className="m-0">
                  <LocationOnIcon className="text-warning fs-6 " />
                  <span>{user?.address}</span>
                </p>
              </div>
            </div>
            {/* profile page end */}
          </Col>
        </Row>
        <hr />
        <Row>
          {/* personal information page start */}
          <Col lg={6} className="mb-3">
            <h5>Personal Information</h5>
            <form onSubmit={handleProfile}>
              <div className="personalInfo">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      onChange={(e)=> handleProfileChange(e)}
                      defaultValue={user?.firstName}
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      onChange={handleProfileChange}
                      defaultValue={user.lastName}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                      onChange={handleProfileChange}
                      defaultValue={user.phoneNumber}
                    />
                  </div>
                </div>
                {/* check fields */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="orderStatus"
                    id="onlineOrder"
                    defaultChecked={user.orderStatus ? true : false}
                    onChange={handleProfileChange}
                  />
                  <label className="form-check-label" htmlFor="onlineOrder">
                    Online Order status updates via Sms
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="promoMsg"
                    id="proSms"
                    defaultChecked={user.promoMsg? true : false}
                    onChange={handleProfileChange}
                  />
                  <label className="form-check-label" htmlFor="proSms">
                    Would you like to receive our exclusive promotion updates
                    via Sms?
                  </label>
                </div>
                {/* text area for address */}
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="address"
                    placeholder="Your current address"
                    rows="3"
                    style={{ resize: "none" }}
                    onChange={handleProfileChange}
                    defaultValue={user.address}
                  ></textarea>
                </div>
                {/* upload photo */}

                <div className=" mb-3">
                  <label className="form-label" htmlFor="uploadpic">
                    Upload Photo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="uploadpic"
                    name="profilePhoto"
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn dish-btn ">Save Changes</button>
                </div>
              </div>
            </form>
            {/* Edit profile info page End */}
          </Col>
          <Col lg={6} className="mb-3">
            <h5>Change Password</h5>
            <form onSubmit={handlePassword}>
              <div className="changePass">
                <div className="mb-3">
                  <input
                    placeholder="Old Password"
                    name="oldPass"
                    type="password"
                    id="oldPass"
                    className="form-control"
                    required
                    onChange={handlePassChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    placeholder="New Password"
                    name="newPass"
                    type="password"
                    id="newPass"
                    className="form-control"
                    required
                    onChange={handlePassChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    placeholder="Confirm Password"
                    name="comfirmPass"
                    type="password"
                    id="confirmPass"
                    className="form-control"
                    required
                    onChange={handlePassChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn dish-btn">Update Password</button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
};

export default ProfileComponent;
