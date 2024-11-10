/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { ReactElement, useEffect, useRef, useState } from "react";
import { PrismicDocumentWithUID } from "@prismicio/client";
import styles from "./styles.module.css";
import Link from "next/link";
import { PrismicImage } from "@prismicio/react";
import { useThumbRows } from "@/app/hooks/useThumbRows";

interface IProps {
  prismicDocs: PrismicDocumentWithUID[]
}


const THUMB_DIAMETER = 150;



export default function StaggeredGrid({ prismicDocs }: IProps): ReactElement {

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const thumbProps = prismicDocs.map(doc => ({
    uid: doc.uid,
    thumb: doc.data.slices[0].primary.square_project_thumbnail
  }));
  const thumbRows = useThumbRows(thumbProps, width, THUMB_DIAMETER)



  // useEffect(() => {
  //   console.log('width:', width);
  // }, [width])

  // useEffect(() => {
  //   console.log('thumbRows:', thumbRows);
  // }, [thumbRows])

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
    <div ref={wrapperRef} className={styles.wrapper}>
      <div>
        {thumbRows.map((row, i) => {

          /* ROW */
          return (
            <div key={`row-${i}`} style={{
              marginLeft: `${i % 2 === 1 ? 0 : THUMB_DIAMETER / 2}px`,
              marginBottom: '-24px'
            }}>
              {row.map((el, elIndex) => {

                /* THUMB */
                return (
                  <Link key={`thumb-${elIndex}`} href={`/portfolio/${el.uid}`}>
                    <PrismicImage
                      style={{ height: `${THUMB_DIAMETER}px` }}
                      field={el.thumb}
                      className={styles.thumb}
                    />
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
