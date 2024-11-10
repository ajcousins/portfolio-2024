import React from "react"
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import StaggeredGrid from "../components/StaggeredGrid";

export default async function PortfolioLanding() {
  const client = createClient();
  const { results } = await client
    .getByType("landing")
    .catch(() => notFound());

  const { projects } = results[0].data
  // console.log('projects:', projects);

  const projectUids = projects.map(({ project }) => {
    if ('uid' in project && typeof project.uid === 'string') {
      return project.uid;
    }
    return null;
  }).filter(uid => uid !== null);
  // console.log('projectUids:', projectUids);

  const projectDocs = await Promise.all(projectUids.map(uid => client.getByUID('project_page', uid)));

  // console.log('projectDocs:', projectDocs);

  const docs = new Array(5)
    .fill(projectDocs[0])
    // .map(doc => doc)
  // console.log('mockImgs:', mockImgs);

  return <>
    Portfolio
    <StaggeredGrid prismicDocs={docs} />
  </>
}