import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "@/components/home/main";
import PromoDeals from "@/components/home/promoDeals.js";
import Category from "@/components/home/category";
import {
  women_dresses,
  women_accessories,
  women_shoes,
  women_swiper,
  gamingSwiper,
  homeImprovSwiper,
} from "@/data/home";
import ProductsSwiper from "@/components/productsSwiper";
import Product from "@/models/Product";
import ProductCard from "@/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import db from "@/utils/db";
// const inter = Inter({ subsets: ["latin"] });

export default function Home({ country, products }) {
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  const { data: session } = useSession();
  // console.log(session);
  return (
    <>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <PromoDeals />
          <div className={styles.home__category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />
            {!isMedium && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            {isMobile && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}
            <Category
              header="Accessories"
              products={women_accessories}
              background="#000"
            />
          </div>
          <ProductsSwiper
            products={women_swiper}
            header="For Women"
            bg="#f25364"
          />
          <ProductsSwiper
            products={gamingSwiper}
            header="For Gamers"
            bg="#2f82ff"
          />
          <ProductsSwiper
            products={homeImprovSwiper}
            header="House Improvements"
            bg="#5a31f4"
          />
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  db.connectDb();

  const products = await Product.find().sort({ createdAt: -1 }).lean();
  console.log(products);
  let data = await axios
    .get("https://api.ipregistry.co/?key=7oln6wvatiy6f6ce")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      // country: { name: data.name, flag: data.flag.emojitwo },

      // TEMP FOR DEVELOPMENT
      country: { name: "Canada", flag: "/../public/images/can-icon.jpg" },
    },
  };
}
