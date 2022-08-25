import React from "react";
import styles from "../Index/Index.module.css";
import logo from "../../img/logo.png";
import { UserOutlined,FireOutlined  } from "@ant-design/icons";
import { Avatar, Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import SongSheet from "../SongSheet/SongSheet";
import Footer from "../Footer/Footer";
export default function Index() {
  const myuser = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const backLogin = function () {
    navigate("/");
  };
  const [banner, setBanner] = useState({ banners: [] });
  const [singer, setSinger] = useState({ artists: [] });
  const [song,setSong] = useState({result:[]})
  useEffect(() => {
    async function loadBanner() {
      await fetch("/banner")
        .then((res) => res.json())
        .then((data) => {
          setBanner(data);
          // console.log(data)
        });
    }
    loadBanner();
  }, []);

  useEffect(() => {
    async function loadSinger() {
      await fetch("/top/artists?limit=15")
        .then((res) => res.json())
        .then((data) => {
          setSinger(data);
        });
    }
    loadSinger();
    async function loadSong(){
      await fetch("/personalized/newsong")
      .then(res=>res.json())
      .then(data=>{setSong(data)})
    }
    loadSong()
  }, []);
 
  return (
    <div>
      
      <nav>
        <div className={styles.myHeader}>
          <img src={logo} alt="logo" />

          <div className={styles.user} onClick={backLogin}>
            <Avatar size="large" icon={<UserOutlined />} />
            <h3>{myuser}</h3>
          </div>
        </div>
      </nav>

      <div className={styles.allBox}>
        <div className={styles.allContent}>
          <div className={styles.myBanner}>
            <Carousel autoplay>
              {banner.banners.map((item) => (
                <div key={item.encodeId}>
                  {/* eslint-disable-next-line */}
                  <img src={item.imageUrl} className={styles.contentStyle} />
                </div>
              ))}
            </Carousel>
          </div>
          <SongSheet/>

          {/* 热门歌手 */}
          <section className={styles.singer}>
            <div className={styles.singerTitle}>
              <h1>
                <UserOutlined />
                热门歌手
              </h1>
            </div>
            <ul>
              {singer.artists.map((item) => (
                <li key={item.id}>
                  <img src={item.img1v1Url} alt="" />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </section>
          {/* 热门音乐 */}
        
        <section className={styles.song}>
          <div  className={styles.singerTitle}>
            <h1><FireOutlined />热门音乐</h1>
          </div>
          <ul>
            {song.result.map((item)=>(
              <li key={item.id}>
                
                <img src={item.picUrl} alt="" />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </section>
        </div>
      </div>
      
     <Footer/>
    </div>
  );
}
