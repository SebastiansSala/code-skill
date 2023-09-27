import { Button } from '../ui/button'

export default function HomeAside() {
  return (
    <aside className="w-48 bg-[#f6f6f9] min-h-screen p-4 flex flex-col">
      <img src="/public/logo.png" className="w-32 h-auto mx-auto" />
      <div className="flex flex-col justify-between flex-1">
        <nav className="mt-6">
          <ul className="space-y-2 relative">
            <Button className="w-full bg-inherit hover:bg-white hover:border-gray-200 text-base text-gray-500 hover:text-bold hover:text-black justify-start border-[#f6f6f9] border">
              Personal Scores
            </Button>
            <Button className="w-full bg-inherit hover:bg-white hover:border-gray-200 text-base text-gray-500 hover:text-bold hover:text-black justify-start border-[#f6f6f9] border">
              Ranking
            </Button>
            <Button className="w-full bg-inherit hover:bg-white hover:border-gray-200 text-base text-gray-500 hover:text-bold hover:text-black justify-start border-[#f6f6f9] border">
              Cerrar sesion
            </Button>
          </ul>
        </nav>
        <Button className="w-full bg-inherit hover:bg-white hover:border-gray-200 text-base text-gray-500 hover:text-bold hover:text-black border-[#f6f6f9] border">
          Cerrar sesion
        </Button>
      </div>
    </aside>
  )
}
