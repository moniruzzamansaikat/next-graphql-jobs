import React from "react";
import { Card, Container } from "react-bootstrap";
import Navigation from "../../components/Navbar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { client } from "../index";
import ReactMarkdown from "react-markdown";

function JobDetails({ job }) {
  return (
    <div>
      <Navigation />
      <Container className="mt-5 pt-5">
        <Card className="p-3 mb-5">
          <h2>{job.title}</h2>
          <ReactMarkdown>{job.description}</ReactMarkdown>
        </Card>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: gql`
      {
        jobs {
          id
          title
          applyUrl
          description
        }
      }
    `,
  });

  return {
    props: {
      job: data.jobs.find((job) => job.id === context.params.id),
    },
  };
}

// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//       {
//         jobs {
//           id
//           details
//         }
//       }
//     `,
//   });

//   const ids = data.jobs.map((job) => job.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export default JobDetails;
