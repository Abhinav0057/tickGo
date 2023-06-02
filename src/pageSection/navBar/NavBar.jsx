import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import logoImage from "../../assets/image/ticketNew.png";

// import '../../Styles/Navbarlive.css';

import { Link, Navigate } from "react-router-dom";
import { useNavBar } from "./useNavBar";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Popuplogin from "../loginSignup/Popuplogin";
import {
  useGetUserProfile,
  useGetUserRole,
} from "../../services/fetchers/user/user";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function NavBar(props) {
  //   const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const navBarData = useNavBar();
  const userProfileData = useGetUserProfile();
  const userRole = useGetUserRole();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 100,
    });
  }, [location]);

  useEffect(() => {
    if (props.isLogin) {
      setButtonPopup(() => true);
    }
  }, [props.isLogin]);
  useEffect(() => {
    if (!userRole?.roles) {
      if (window.location.href.includes("checkout")) {
        toast.error("Login first to buy tickets");
        navigate("/login");
        if (!window.location.href.includes("signup")) {
          navigate("/login");
        }
      }
    }
  }, [window.location.href]);

  return (
    <div style={{ cursor: "pointer" }}>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{
          alignItems: "center",
          color: "white",
          display: "flex !important",
          justifyContent: "space-around",
        }}
        className="d-flex justify-content-space-around p-0 m-0"
      >
        <Navbar.Brand href="/">
          {" "}
          <div className="logo" style={{ color: "white", padding: "0px 20px" }}>
            <Link
              to="/"
              style={{
                height: "50px",
              }}
              className=""
            >
              <img
                style={{
                  height: "50px",
                  widows: "auto",
                  color: "white",
                  borderRadius: "6px",
                }}
                src={logoImage}
              ></img>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ backgroundColor: "white", alignItems: "center" }}
        />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            display: "flex !important",
            justifyContent: "flex-end",
            alignItems: "center",
            color: "white",
            verticalAlign: "middle",
          }}
        >
          <Nav
            className="text-right mx-4"
            style={{ color: "white", alignItems: "center" }}
          >
            {userRole?.roles?.toLowerCase() == "company" && (
              <Nav
                className="mx-4"
                style={{
                  maxWidth: "150px",
                  padding: 0,
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Link
                  to="/organizer/create-event"
                  className="active "
                  style={{ Color: "white" }}
                >
                  Create Event
                </Link>
              </Nav>
            )}
            {userRole?.roles?.toLowerCase() == "superadmin" && (
              <>
                <Nav
                  className="mx-4"
                  style={{
                    maxWidth: "150px",
                    padding: 0,
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Link
                    to="/superadmin/approve-events"
                    className="active "
                    style={{ Color: "white" }}
                  >
                    Approve Events
                  </Link>
                </Nav>
                <Nav
                  className="mx-4"
                  style={{
                    maxWidth: "150px",
                    padding: 0,
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Link
                    to="/superadmin/Unapprove-events"
                    className="active "
                    style={{ Color: "white" }}
                  >
                    Unapprove Events
                  </Link>
                </Nav>
              </>
            )}
            {userRole?.roles?.toLowerCase() == "company" && (
              <>
                <Nav
                  className="mx-4"
                  style={{
                    maxWidth: "150px",
                    padding: 0,
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Link
                    to="/company/publish-unbublish-events"
                    className="active "
                    style={{ Color: "white" }}
                  >
                    My Events
                  </Link>
                </Nav>
              </>
            )}
            <Nav
              className="mx-4"
              style={{
                maxWidth: "150px",
                padding: 0,
                alignItems: "center",
                color: "white",
              }}
            >
              {userRole?.roles?.toLowerCase() == "company" && (
                <Link
                  to="/company-dashboard"
                  className="active "
                  style={{ Color: "white" }}
                >
                  Dashboard
                </Link>
              )}
            </Nav>
            {userRole?.roles && (
              <Nav
                className="mx-4"
                style={{
                  maxWidth: "150px",
                  padding: 0,
                  alignItems: "center",
                  color: "white",
                }}
              >
                {/* <a href="/"> */}

                <Link to={"/userhomepage"}>
                  <div
                    className="fa-regular fa-circle-user"
                    style={{
                      maxWidth: "150px",
                      padding: 0,
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {userProfileData?.data?.name ?? "User"}
                  </div>
                  {/* </a> */}
                </Link>
              </Nav>
            )}
            {userRole?.roles ? (
              <Nav
                className="mx-4"
                style={{
                  maxWidth: "150px",
                  padding: 0,
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => {
                    localStorage.setItem("token", "");
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>{" "}
              </Nav>
            ) : (
              <Nav
                className="mx-4"
                style={{
                  maxWidth: "150px",
                  padding: 0,
                  alignItems: "center",
                  color: "white",
                }}
              >
                <Button variant="danger" onClick={() => setButtonPopup(true)}>
                  Login
                </Button>{" "}
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Popuplogin trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="heading"> Login</h3>
      </Popuplogin>
    </div>
  );
}
