/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { ReactElement, useEffect, useRef, useState } from "react";
import { PrismicDocumentWithUID } from "@prismicio/client";
import styles from "./styles.module.css";
import Link from "next/link";
import { PrismicImage } from "@prismicio/react";
import { useThumbRows } from "@/app/hooks/useThumbRows";

const THUMB_DIAMETER = 180;

interface IProps {
  prismicDocs: PrismicDocumentWithUID[]
}

export default function StaggeredGrid({ prismicDocs }: IProps): ReactElement {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const thumbProps = prismicDocs.map(doc => ({
    uid: doc.uid,
    thumb: doc.data.slices[0].primary.square_project_thumbnail
  }));
  const thumbRows = useThumbRows(thumbProps, width, THUMB_DIAMETER)

  useEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return
      setWidth(wrapperRef.current.offsetWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div ref={wrapperRef}>
      {thumbRows.map((row, i) => (
        <div
          className={styles.wrapper}
          key={`row-${i}`}
        >
          {row.map((el, elIndex) => (
            <Link key={`thumb-${elIndex}`} href={`/portfolio/${el.uid}`}>
              <PrismicImage
                style={{ height: `${THUMB_DIAMETER}px` }}
                field={el.thumb}
                className={styles.thumb}
              />
            </Link>
          )
          )}
        </div>
      )
      )}
    </div>
  )
}
