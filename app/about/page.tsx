import React from "react"
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { BodyText } from "../components/lib/01-cells";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";

export default async function About() {
  const client = createClient();
  const { results } = await client
    .getByType("about")
    .catch(() => notFound());

  const { titletext, description, profile_photo } = results[0].data

  return <>
    <h1>{titletext}</h1>
    <div className={styles["content-wrapper"]}>
      <PrismicNextImage
        key={profile_photo.id}
        field={profile_photo.head_shot}
        className={styles["head-shot"]}
      />
      <BodyText richText={description} />
      <PrismicNextImage
        key={profile_photo.id}
        field={profile_photo}
        className={styles["main-photo"]}
      />
    </div>
  </>
}