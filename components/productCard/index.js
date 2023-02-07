import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductSwiper from "./ProductSwiper";
import styles from "./styles.module.scss";

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product.subProducts[active]?.sizes
      .map((s, i) => {
        return <React.Fragment key={i}>{s.price}</React.Fragment>;
      })
      .sort((a, b) => {
        return a - b;
      })
  );
  const [stylesNew, setStylesNew] = useState(
    product.subProducts.map((p) => {
      return p.color;
    })
  );
  useEffect(() => {
    setImages(product.subProducts[active].images);
    setPrices(
      product.subProducts[active]?.sizes
        .map((s, i) => {
          return <React.Fragment key={i}>{s.price}</React.Fragment>;
        })
        .sort((a, b) => {
          return a - b;
        })
    );
  }, [active, product]);
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <a
          href={`/product/${product.slug}?style=${active}`}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <ProductSwiper images={images} />
          </div>
        </a>
        {product.subProducts[active].discount ? (
          <div className={styles.product__discount}>
            -{product.subProducts[active].discount}%
          </div>
        ) : (
          ""
        )}
        <div className={styles.product__infos}>
          <h1>
            {product.name.length > 35
              ? `${product.name.substring(0, 35)}...`
              : product.name}
          </h1>
          <span>
            {prices.length === 1
              ? `CAD${prices[0]}$`
              : `CAD${prices[0]}-${prices[prices.length - 1]}$`}
          </span>
          <div className={styles.product__colors}>
            {stylesNew &&
              stylesNew.map((style, i) =>
                style.image ? (
                  <img
                    key={i}
                    src={style.image}
                    className={i == active ? styles.active : undefined}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                    alt=""
                  />
                ) : (
                  <span
                    key={i}
                    style={{ backgroundColor: `${style.color}` }}
                    onMouseOver={() => {
                      setImages(product.subProducts[i].images);
                      setActive(i);
                    }}
                  ></span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
