import React from "react";
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

function Navigation({ filterJobs }) {
  const handleInput = ({ target: { value } }) => {
    const string = value?.trim().toLowerCase();
    filterJobs(string);
  };

  return (
    <Navbar className={styles.nav} fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Link href="/">
            <img src="/img/logo.svg" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <input onInput={handleInput} type="text" className={styles.search_input} placeholder="Search #tag" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
