import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FatherContext } from "../Index";
import styles from '../Item/Item.module.css'
export default function Item() {
  const item = useContext(FatherContext);
  const [song2, setSong2] = useState({ songs: [] });
  useEffect(() => {
    async function loadData() {
      await fetch("http://124.223.37.254:3000/song/detail?ids=" + item.id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSong2(data);
        });
    }
    loadData();
  }, [item.id]);
  return (
    <div className={styles.myItem}>
      {/* 多个需要在一个标签下 */}
      {song2.songs.map((item) => (
        <div key={item.id}>
          <img src={item.al.picUrl} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
