// import { useHome } from './useHome';
import HeaderSearch from "../../pageSection/headerSearch/HeaderSearch";
import UpcommingEvents from "../../pageSection/upcommingEvents/UpcommingEvents";
import RecomendedEvents from "../../pageSection/recomendedEvents/RecomendedEvents";
import EmailNewsLetter from "../../pageSection/emailNewsletter/EmailNewsLetter";
import React from "react";

export const Home = () => {
  // isSuccess && console.log(data);
  // isError && console.log(error);
  // const homeData = useHome();

  // return homeData?.isLoading ? (
  // 	<>"loading"</>
  // ) : (
  // 	<div style={{ display: ' row' }}>
  // 		{console.log(homeData?.data?.data?.products)}
  // 		{homeData?.data?.data?.products &&
  // 			homeData?.data?.data?.products?.map((product) => {
  // 				return (
  // 					// <Productcard
  // 					// 	product={product}
  // 					// 	key={product.id}
  // 					// 	className="col-3"
  // 					// ></Productcard>
  // 					<></>
  // 				);
  // 			})}
  // 	</div>
  // );
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeaderSearch />
      <UpcommingEvents />
      <RecomendedEvents />
      <EmailNewsLetter />
    </div>
  );
};
