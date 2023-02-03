import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country }) {
  return (
    <>
      <Header country={country} />
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=7oln6wvatiy6f6ce")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(data);
  return {
    props: {
      // products: JSON.parse(JSON.stringify(products)),
      // country: { name: data.name, flag: data.flag.emojitwo },

      // TEMP FOR DEVELOPMENT
      country: { name: "Canada", flag: "/../public/images/can-icon.jpg" },
    },
  };
}
