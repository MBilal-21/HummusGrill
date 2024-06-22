import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeader from "../SectionHeader";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useLocation } from "react-router-dom";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import person from "../../Assets/person.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Dashboard = () => {
    const linktabP = useRef();
    const linktabH = useRef();
  const [passChange, setPassChange] = useState({
    oldPass: "",
    newPass: "",
    comfirmPass: "",
  });
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    promoSMS: true,
    eStatus: true,
    profilePhoto: person,
  });
  const [resData, setResData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const show = useLocation().search.split("=")[1];
  const handleProfile = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setProfile((preState) => ({ ...preState, [name]: newValue }));
  };
  const handlePass = (e) => {
    setPassChange((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };
  const errProfile = () => {
    return { background: "#ff000050" };
  };
  const errPass = () => {
    return { background: "#00800050" };
};
useEffect(() => {
   
    if (show === "profile") {
      setShowProfile(true);
      linktabP.current.classList.add("active");
      linktabH.current.classList.remove("active");
    }
    if (show === "ordered-history") {
        setShowProfile(false);
        linktabH.current.classList.add("active");
        linktabP.current.classList.remove("active");
    }
    
  }, [show]);

  return (
    <div className="about dashboard">
      <Container>
        <SectionHeader heading={"User Dashboard"} />
        {/* side tab profile and history */}
        <Row>
          <Col xs={12} md={3} lg={2}>
            <ul className="d-flex flex-column align-items-center text-center dashTab">
              <li className="w-100">
                <Link className="tab" to={"?q=profile"} ref={linktabP}>
                  <i
                    className="icofont-dashboard-web"
                    style={{ fontSize: "25px" }}
                  ></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li className="w-100">
                <Link className=" tab" to={"?q=ordered-history"} ref={linktabH}>
                  <PersonSharpIcon
                    className="mx-auto"
                    style={{ fontSize: "25px" }}
                  />
                  <span>Odered History</span>
                </Link>
              </li>
            </ul>
          </Col>

          {showProfile ? (
            <Col xs={12} md={9} lg={10}>
              <Row>
                {/* error for Profile */}
                <Col md={12}>
                  <div
                    className="profileError"
                    style={{ background: "  #00800050" }}
                  >
                    <div className="d-flex justify-content-between">
                      <h5>Profile error</h5>
                      <button className="btn-close" aria-label="close"></button>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eaque?</span>
                    </div>
                  </div>
                </Col>
                {/* Error for password */}
                <Col md={12}>
                  <div
                    className="passError"
                    style={{ background: "#ff000050" }}
                  >
                    <div className="d-flex justify-content-between">
                      <h5>Pass word error</h5>
                      <button className="btn-close" aria-label="close"></button>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eaque?</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="overview">
                <Row>
                  <Col lg={12} className="mb-3 ">
                    {/* profile page start */}
                    <h5>Profile</h5>
                    <div className="userInfo">
                      <img
                        src={
                          resData.profilePhoto ? resData.profilePhoto : person
                        }
                        alt="profile"
                        width={115}
                        height={115}
                      />
                      <div className="media">
                        <h4>{"Bilal Ashraf"}</h4>
                        <p className="m-0">
                          <MailIcon className="text-warning fs-6" />{" "}
                          <span>{"hello@gmail.com"}</span>
                        </p>
                        <p className="m-0">
                          <PhoneIcon className="text-warning fs-6" />
                          <span> {"3120909009"}</span>{" "}
                        </p>
                        <p className="m-0">
                          <LocationOnIcon className="text-warning fs-6 " />
                          <span>{"Sargodha"}</span>
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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="personalInfo">
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First name"
                              onChange={handleProfile}
                            />
                          </div>
                          <div className="col-lg-6 mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                              onChange={handleProfile}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-12">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Phone Number"
                              required
                              onChange={handleProfile}
                            />
                          </div>
                        </div>
                        {/* check fields */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="eStatus"
                            id="onlineOrder"
                            defaultChecked
                            onChange={handleProfile}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlineOrder"
                          >
                            Online Order status updates via Sms
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="promoSMS"
                            id="proSms"
                            defaultChecked
                            onChange={handleProfile}
                          />
                          <label className="form-check-label" htmlFor="proSms">
                            Would you like to receive our exclusive promotion
                            updates via Sms?
                          </label>
                        </div>
                        {/* text area for address */}
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Your current address"
                            rows="3"
                            style={{ resize: "none" }}
                            onChange={handleProfile}
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
                            onChange={handleProfile}
                          />
                        </div>
                        <div className="text-center">
                          <button className="btn dish-btn ">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Edit profile info page End */}
                  </Col>
                  <Col lg={6} className="mb-3">
                    <h5>Change Password</h5>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="changePass">
                        <div className="mb-3">
                          <input
                            placeholder="Old Password"
                            name="oldPass"
                            type="password"
                            id="oldPass"
                            className="form-control"
                            required
                            onChange={handlePass}
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
                            onChange={handlePass}
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
                            onChange={handlePass}
                          />
                        </div>
                        <div className="text-center">
                          <button className="btn dish-btn">
                            Update Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </Col>
                </Row>
              </div>
            </Col>
          ) : (
            <Col>
              <h1>ordered history</h1>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
