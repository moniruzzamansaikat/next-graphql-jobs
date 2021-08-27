import React, { useState } from "react";
import { Col, FormControl, InputGroup, Row, Button } from "react-bootstrap";
import styles from "./HomeSearch.module.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";

function HomeSearch({ queries, queries2 }) {
  const router = useRouter();
  const [queryOne, setQueryOne] = useState("");
  const [queryTwo, setQueryTwo] = useState("");

  const handleClick = () => {
    router.push(`/jobs?q1=${queryOne.name || ""}&q2=${queryTwo.name || ""}`);
  };

  const handleQueryOne = (item) => setQueryOne(item);
  const handleQueryTwo = (item) => setQueryTwo(item);

  return (
    <div className={styles.wrapper}>
      <h1 className="text-center mb-5">Find your dream job :)</h1>

      <Row className="g-2">
        <Col md="5">
          <ReactSearchAutocomplete
            onSelect={handleQueryOne}
            items={queries}
            placeholder="Job title, keywords, or company"
          />
        </Col>
        <Col md="5">
          <ReactSearchAutocomplete
            onSelect={handleQueryTwo}
            items={queries2}
            placeholder="City, state, zip code or remote"
          />
        </Col>
        <Col md="2">
          <Button onClick={handleClick}>Find Jobs</Button>
        </Col>
      </Row>
    </div>
  );
}

export default HomeSearch;
