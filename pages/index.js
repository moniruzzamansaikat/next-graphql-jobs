import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Card, Col, Row, Container, Badge } from "react-bootstrap";
import styles from "./index.module.css";
import Navigation from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";

export const client = new ApolloClient({
  uri: "https://api.graphql.jobs",
  cache: new InMemoryCache(),
});

function Home({ jobs: allJobs }) {
  const [jobs, setJobs] = useState([]);

  function filterJobs(search) {
    const filtered = allJobs.map((job) => ({
      ...job,
      tags: job.tags.filter((tag) => tag.name.toLowerCase().indexOf(search) >= 0),
    }));

    setJobs(filtered.filter((filter) => filter.tags.length > 0));
  }

  useEffect(() => {
    setJobs(allJobs);
  }, []);

  return (
    <div className="py-5">
      <Navigation filterJobs={filterJobs} />
      <Head>
        <title>Jobify | Home</title>
      </Head>

      <Container className="mt-5">
        <Row>
          {jobs.map((job) => (
            <Col md="6" className="mb-5">
              <Card className={styles.job_card}>
                <Card.Body>
                  {/* loop through tags */}
                  {job.tags.map((tag, i) => (
                    <Badge className="me-1" pill bg={i % 3 === 0 ? "success" : i % 2 === 0 ? "warning" : "dark"}>
                      <small>#{tag.name}</small>
                    </Badge>
                  ))}

                  <Card.Title as="h3" className="mt-3">
                    {job.title}
                  </Card.Title>

                  <Card.Body>
                    <p>
                      <i class="bi bi-bag-fill"></i>
                      <span className="ms-2">{job.commitment.title}</span>
                    </p>
                    <p>
                      <i class="bi bi-geo-alt-fill"></i>
                      <span className="ms-2">{job.company.name}</span>
                    </p>
                    <p>
                      <i class="bi bi-globe2"></i>
                      <a href={job.company.websiteUrl} target="_blank" className="ms-2">
                        {job.company.websiteUrl}
                      </a>
                    </p>
                  </Card.Body>

                  <a className={`btn btn-sm ${styles.apply_button}`} href={job.applyUrl} target="_blank">
                    Apply Now
                  </a>
                  <button className={`btn btn-sm ms-2 ${styles.details_button}`}>
                    <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        jobs {
          id
          title
          slug
          applyUrl
          locationNames
          commitment {
            title
          }
          tags {
            name
          }
          company {
            name
            websiteUrl
          }
        }
      }
    `,
  });

  return {
    props: {
      jobs: data.jobs,
    },
  };
}

export default Home;
