import React from "react";
import { Link } from "react-router-dom";
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
              <div
                className=" text-white"
                style={{ fontWeight: "700", fonSize: "32px" }}
              >
                Ticket<span className="text-danger">Go</span>
              </div>
              <p className="text-white">Ticketing Memories</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase text-white mb-4 font-weight-bold ">
                Product
              </h5>
              <p>
                <a href="/" className="text-white mt-3">
                  {" "}
                  The Providers
                </a>
              </p>
              <p>
                <a href="/" className="text-white">
                  {" "}
                  Service{" "}
                </a>
              </p>
              <p>
                <a href="/" className="text-white">
                  {" "}
                  Price{" "}
                </a>
              </p>
              <p>
                <a href="/" className="text-white">
                  {" "}
                  Rooms{" "}
                </a>
              </p>
              <p>
                <a href="/" className="text-white">
                  {" "}
                  Extra
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase text-white mb-4 font-weight-bold ">
                Useful Links
              </h5>
              <ul>
                <li className="mt-3">
                  <Link to="/About" className="text-white ">
                    About
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/TC" className="text-white  ">
                    Terms and Condition
                  </Link>
                </li>
                <li className="mt-3">
                  <Link to="/Privacy" className="text-white ">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white ">
                Contact
              </h5>
              <p>
                <i className="fas fa-home mr-3 text-white"></i>Kathmandu 4600
                Nepal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
