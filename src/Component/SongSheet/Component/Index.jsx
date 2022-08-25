import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../Component/Index.module.css";
import Item from "./Item/Item";
import Footer from '../../Footer/Footer'
export const FatherContext = createContext()
export default function Index() {
  const {
    state: { id },
  } = useLocation();

  const [songSheet, setSongSheet] = useState({ playlist: {}, privileges: [] });
  const [tags,setTags] = useState({tags:[]})
 
  useEffect(() => {
    async function loadSheet() {
      await fetch("http://124.223.37.254:3000/playlist/detail?id=" + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTags(data.playlist)
          setSongSheet(data);
        });
    }
    loadSheet();
  }, [id]);

  console.log(id);

  return (
    <div>
      <header>
        <div className={styles.headerBg}>
          <img src={songSheet.playlist.coverImgUrl} alt="" />
        </div>
        <div className={styles.introduce}>
          <img src={songSheet.playlist.coverImgUrl} alt="" />
          <div className={styles.introduceRight}>
            <h2> {songSheet.playlist.name}</h2>
            <span>
              标签：
              {tags.tags.map((item) => (
                <b key={item} style={{ marginRight: "10px" }}>{item}</b>
              ))}
            </span>
            <p>{songSheet.playlist.description}</p>
          </div>
        </div>
      </header>

                {
                  songSheet.privileges.map((item)=>(
                    <FatherContext.Provider value={item}>
                      <Item/>

                    </FatherContext.Provider>
                  ))
                }
      
<Footer/>

    </div>
  );
}
