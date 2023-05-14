import React from "react";
import Button from "react-bootstrap/Button";

// import '../../Styles/Navbarlive.css';

import { Link } from "react-router-dom";
import { useNavBar } from "./useNavBar";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Popuplogin from "../loginSignup/Popuplogin";
import {
  useGetUserProfile,
  useGetUserRole,
} from "../../services/fetchers/user/user";

export default function NavBar() {
  //   const [open, setOpen] = useState(false);
  const [buttonPopup, setButtonPopup] = React.useState(false);
  const navBarData = useNavBar();
  const userProfileData = useGetUserProfile();
  const userRole = useGetUserRole();

  return (
    <div style={{ cursor: "pointer" }}>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{
          backgroundColor: "black",
          alignItems: "center",
          display: "flex !important",
          justifyContent: "space-around",
        }}
        className="d-flex justify-content-space-around p-0 m-0"
      >
        <Navbar.Brand href="/">
          {" "}
          <div className="logo" style={{ color: "white" }}>
            <Link
              to="/"
              style={{ color: "white", fontSize: "32px", fontWeight: "700" }}
              className=""
            >
              Ticket
              <span className="go" style={{ color: "red" }}>
                Go
              </span>
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
            verticalAlign: "middle",
          }}
        >
          <Nav
            className="text-right mx-4"
            style={{ color: "white", alignItems: "center" }}
          >
            <Nav
              className="mx-4"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                letterSpacing: "2px",
                maxWidth: "150px",
                padding: 4,
                alignItems: "center",
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
            {userRole?.roles?.toLowerCase() == "superadmin" && (
              <>
                <Nav
                  className="mx-4"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    maxWidth: "150px",
                    alignItems: "center",
                    padding: 4,
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
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    alignItems: "center",
                    padding: 4,
                    maxWidth: "150px",
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
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    maxWidth: "150px",
                    padding: 4,
                    alignItems: "center",
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
                fontSize: "18px",
                padding: 4,
                fontWeight: "500",
                letterSpacing: "2px",
                alignItems: "center",
                maxWidth: "150px",
              }}
            >
              {userRole?.roles?.toLowerCase() == "company" && (
                <Link to="/company-dashboard" className="active ">
                  Dashboard
                </Link>
              )}
            </Nav>

            <Nav
              className="mx-4"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                padding: 4,
                letterSpacing: "2px",
                alignItems: "center",
                maxWidth: "150px",
              }}
            >
              {/* <a href="/"> */}
              <Link to={"/userhomepage"}>
                <div
                  className="fa-regular fa-circle-user"
                  // onClick={() => {
                  // 	setOpen(!open);
                  // }}
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    maxWidth: "150px",
                  }}
                >
                  {userProfileData?.data?.name ?? "User"}
                </div>
                {/* </a> */}
              </Link>
            </Nav>
            {userRole?.roles ? (
              <Nav
                className="mx-4"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  letterSpacing: "2px",
                  padding: 4,
                  maxWidth: "150px",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="danger"
                  onClick={() => localStorage.setItem("token", "")}
                >
                  Logout
                </Button>{" "}
              </Nav>
            ) : (
              <Nav
                className="mx-4"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  letterSpacing: "2px",
                  padding: 4,
                  maxWidth: "150px",
                  alignItems: "center",
                }}
              >
                <Button variant="danger" onClick={() => setButtonPopup(true)}>
                  Login
                </Button>{" "}
              </Nav>
            )}
          </Nav>
          {/* <Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav> */}
          {/* <Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav> */}
        </Navbar.Collapse>
      </Navbar>
      <Popuplogin trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3 className="heading"> Login</h3>
      </Popuplogin>
    </div>
  );
}
