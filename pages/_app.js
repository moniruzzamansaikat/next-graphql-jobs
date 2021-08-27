import { Container } from "react-bootstrap";
import HomeSearch from "../components/HomeSearch";
import Navigation from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
