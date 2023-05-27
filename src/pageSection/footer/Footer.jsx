import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/image/ticketNew.png";
import footerImage from "../../assets/image/footer.png";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div
          className="container-fluid text-center text-md-left"
          style={{
            background:
              "linear-gradient(137.71deg, rgba(0, 0, 0, 0.88) 71.53%, #F30606 100.98%, rgba(255, 255, 255, 0.42) 95.98%)",
          }}
        >
          <div className="row text-center text-md-left">
            <div className=" col-md-3 col-lg-3 col-xl-3 mx mx-auto mt-4">
              <div className="logo" style={{ color: "white" }}>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    fontSize: "32px",
                    fontWeight: "700",
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
              <p className="text-white pt-1">
                YOUR TICKET TO
                <span style={{ color: "red" }}> रमाइलो!</span>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase text-white mb-4 font-weight-bold ">
                Terms
              </h5>

              <p>
                <Link to="/terms-and-conditions" style={{ color: "white" }}>
                  Terms
                </Link>
              </p>
              <p>
                <Link to="/terms-and-conditions" style={{ color: "white" }}>
                  privacy-policy
                </Link>
              </p>
              <p>
                <Link to="/company-disclamer" style={{ color: "white" }}>
                  Disclaimer
                </Link>
              </p>
              <p></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase text-white mb-4 font-weight-bold ">
                Useful Links
              </h5>
              <ul>
                <li className="mt-3">
                  <Link to="/about-us" className="text-white ">
                    About
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/community-guideline" className="text-white  ">
                    Guideline
                  </Link>
                </li>
                <li className="mt-3"></li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white ">
                Contact
              </h5>
              <p className="text-white">
                <i className="fa fa-home mr-2 text-white"></i>Budhanilkantha,
                Nepal
              </p>
              <a
                href="tel:+9779863941434"
                style={{ color: "white", textDecoration: "none" }}
              >
                +977 9863941434
              </a>
              <div>
                <a
                  href="mailto:ticketgo123@gmail.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  ticketgo123@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div
            className="row  pl-4 pr-4 "
            style={{
              color: "white",
              background:
                "linear-gradient(137.71deg, rgba(0, 0, 0, 0.88) 71.53%, #F30606 100.98%, rgba(255, 255, 255, 0.42) 95.98%)",
            }}
          >
            <div className="d-flex justify-content-center">
              <div className="" style={{ fontSize: "12px" }}>
                Powered By Radiant Elixir Softtech
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
