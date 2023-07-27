import HeaderNavigation from "@/components/HeaderNavigation"
import HeaderNavigationCarousel from "@/components/HeaderNavigationCarousel"
import TopCryptos from "@/components/TopCryptos"
import Footer from "@/components/Footer"
import AboutUs from "@/components/AboutUs"
import Subscribe from "@/components/Subscribe"


export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <HeaderNavigationCarousel />
      <AboutUs />
      <TopCryptos />
      <Subscribe />
      <Footer />
    </>
  )
}