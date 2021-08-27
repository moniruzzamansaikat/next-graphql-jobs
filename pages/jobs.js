import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql, defaultDataIdFromObject } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs",
  cache: new InMemoryCache(),
});

function Jobs({ jobs: allJobs }) {
  const { query } = useRouter();

  useEffect(() => {
    const jobs = allJobs.filter(function (job) {
      return (
        job.title?.toLowerCase().trim() === query?.q1?.toLowerCase().trim() ||
        job.company?.name?.toLowerCase().trim() === query?.q1?.toLowerCase().trim()
      );
    });
    console.log(jobs);
  }, [query]);

  return (
    <div>
      <h2>Jobs</h2>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        jobs {
          title
          company {
            name
            websiteUrl
          }
          applyUrl
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

export default Jobs;
