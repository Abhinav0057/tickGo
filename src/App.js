import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-quill/dist/quill.snow.css";
import { AppRouter } from "./routes.js";

function App() {
  return (
    // <ThemeProvider theme = {theme}></ThemeProvider> If want to use themeing from mui,
    //Define Top level contexts here
    <AppRouter />
  );
}

export default App;
