import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventHomePage from "./pages/eventPage/EventHomePage";
import EventTicketPage from "./pages/eventTicketPage/EventTicketPage";
import { Home } from "./pages/Home/Home";
import { useEffect } from "react";
import Footer from "./pageSection/footer/Footer";
import NavBar from "./pageSection/navBar/NavBar";
import React from "react";
import CreateEvent from "./pages/createEvent/CreateEvent";
import Signup from "./pages/signupPage/Signup";
import SignupSecondUser from "./pages/signupPage/SignupSecondUser";
import SignupCompany from "./pages/signupPage/SignupCompany";
import UnapprovedEventsList from "./pages/superAdmin/UnapprovedEventsList";
import ApprovedEventsList from "./pages/superAdmin/ApprovedEventsList";
import CompanyEventToggle from "./pages/company/CompanyEventToggle";
import CheckoutPage from "./pages/checkoutpage/CheckoutPage";
import Userhomepage from "./pages/userhomepage/Userhomepage";
import PyamentVeificationpage from "./pages/checkoutpage/PyamentVeificationpage";
import CompanyDashboard from "./pages/dashboard/CompanyDashboard";
import { useNavigate } from "react-router-dom";
import AboutUs from "./UI/websitedescPages/AboutUs";
import Privacypolicy from "./UI/websitedescPages/Privacypolicy";
import CommunityGuideline from "./UI/websitedescPages/CommunityGuideline";
import TermsAndConditions from "./UI/websitedescPages/TermsAndConditions";
import Disclamer from "./UI/websitedescPages/Disclamer";

export const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/about-us",
    element: (
      <>
        <NavBar />
        <AboutUs />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/terms-and-conditions",
    element: (
      <>
        <NavBar />
        <TermsAndConditions />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/community-guideline",
    element: (
      <>
        <NavBar />
        <CommunityGuideline />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <NavBar />
        <Privacypolicy />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/company-disclamer",
    element: (
      <>
        <NavBar />
        <Disclamer />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar isLogin={true} />
        <Home isLogin={true} />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <>
        <NavBar />
        <Signup />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/userhomepage",
    element: (
      <>
        <NavBar />
        <Userhomepage />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/company-dashboard",
    element: (
      <>
        <NavBar />
        <CompanyDashboard />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/signup/user",
    element: (
      <>
        <NavBar />
        <SignupSecondUser />

        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/signup/company",
    element: (
      <>
        <NavBar />
        <SignupCompany />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/eventpage/:eventid/:eventName",
    element: (
      <>
        <NavBar />
        <EventHomePage />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/eventpage/:eventid/:eventName/ticket",
    element: (
      <>
        <NavBar />
        <EventTicketPage />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/checkout/:eventid/:eventName/",
    element: (
      <>
        <NavBar />
        <CheckoutPage />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/payment-return-khalti/",
    element: (
      <>
        <NavBar />
        <PyamentVeificationpage />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/organizer/create-event",
    element: (
      <>
        <NavBar />
        <CreateEvent />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/company/publish-unbublish-events",
    element: (
      <>
        <NavBar />
        <CompanyEventToggle></CompanyEventToggle>
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/superadmin/approve-events",
    element: (
      <>
        <NavBar />
        <UnapprovedEventsList />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
  {
    path: "/superadmin/Unapprove-events",
    element: (
      <>
        <NavBar />
        <ApprovedEventsList />
        <Footer />
      </>
    ),

    children: [
      {
        path: "child",
      },
    ],
  },
];

export const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};
