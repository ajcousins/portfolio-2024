"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { toTitleCase } from "@/app/helpers/text";

interface IProps {
  links: string[]
}

const LINK_SPACING = 21.2

const Nav = ({ links }: IProps): JSX.Element => {
  const [offset, setOffset] = useState(0)

  return (<div className={styles.location}>
    <div className={styles.wrapper}>
      {links.map((link, i) => {
        return <Link
          key={link}
          href={`/${link}`}
          onMouseOver={() => setOffset(i * LINK_SPACING)}
          onClick={() => setOffset(0)}
        >
          {toTitleCase(link)}
        </Link>
      })}
      <div className={styles.sun} style={
        { transform: `translate(0px, ${offset}px)` }
      }></div>
    </div>
  </div>)
}

export default Nav
