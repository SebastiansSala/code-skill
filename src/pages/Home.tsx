import HomeAside from '../components/Home/home-aside'
import HomeHeader from '../components/Home/home-header'
import HomeMain from '../components/Home/home-main'

export default function Home() {
  return (
    <div className="flex">
      <HomeAside />
      <section className="flex-1 flex flex-col bg-white">
        <HomeHeader />
        <HomeMain />
      </section>
    </div>
  )
}
