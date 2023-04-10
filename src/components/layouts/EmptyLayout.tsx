import React, { useEffect } from "react";
import { LayoutProps } from "@/types";
import styles from "./emptyLayout.module.css";

export function EmptyLayout({ children }: LayoutProps) {

  useEffect(() => {
    var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);
  }, [])

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div id="scene" className={styles.scene} data-hover-only="false">
          <div className={styles.circle} data-depth="1.2"></div>

          <div className={styles.one} data-depth="0.9">
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div>

          {/* <div className={styles.two} data-depth="0.60">
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div> */}

          <div className={styles.three} data-depth="0.40">
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div>

          <p className={styles.p404} data-depth="0.50">
            404
          </p>
          <p className={styles.p404} data-depth="0.10">
            404
          </p>
        </div>

        <div className={styles.text}>
          <article>
            <button>Về Trang Chủ</button>
            <p>
              Trang bạn truy cập không tìm thấy!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
