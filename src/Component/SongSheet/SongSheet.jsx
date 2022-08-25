import React from "react";
import styles from "../SongSheet/SongSheet.module.css";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SongSheet() {
  const [songSheet, setSongSheet] = useState({ result: [] });
  useEffect(() => {
    async function loadSheet() {
      await fetch("http://124.223.37.254:3000/personalized?limit=18")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setSongSheet(data);
        });
    }
    loadSheet();
  }, []);

  return (
    <div className={styles.songSheet}>
      <div className={styles.sTitle}>
        <h1>
          
          <CustomerServiceOutlined />
          推荐歌单
        </h1>
      </div>
      <ul>
        {songSheet.result.map((item) => (
          <li key={item.id}>
            <Link to="/songSheet" state={{ id: item.id }}>
              <img src={item.picUrl} alt="" />
              <p> {item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
