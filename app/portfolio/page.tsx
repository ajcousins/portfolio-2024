import React from "react"
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import StaggeredGrid from "../components/StaggeredGrid";
import styles from "./styles.module.css";

export default async function PortfolioLanding() {
  const client = createClient();
  const { results } = await client
    .getByType("landing")
    .catch(() => notFound());

  const { projects } = results[0].data

  const projectUids = projects.map(({ project }) => {
    if ('uid' in project && typeof project.uid === 'string') {
      return project.uid;
    }
    return null;
  }).filter(uid => uid !== null);

  const projectDocs = await Promise.all(projectUids.map(uid => client.getByUID('project_page', uid)));
  const docs = new Array(10)
    .fill(projectDocs[0])

  return <>
    <div className={styles.wrapper}>
      <StaggeredGrid prismicDocs={docs} />
    </div>
  </>
}