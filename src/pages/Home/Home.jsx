// import { useHome } from './useHome';
import HeaderSearch from "../../pageSection/headerSearch/HeaderSearch";
import UpcommingEvents from "../../pageSection/upcommingEvents/UpcommingEvents";
import RecomendedEvents from "../../pageSection/recomendedEvents/RecomendedEvents";
import EmailNewsLetter from "../../pageSection/emailNewsletter/EmailNewsLetter";
import React from "react";

export const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderSearch />
      <UpcommingEvents />
      <RecomendedEvents />
      <EmailNewsLetter />
    </div>
  );
};
