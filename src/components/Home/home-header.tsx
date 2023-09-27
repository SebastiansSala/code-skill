import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function HomeHeader() {
  return (
    <header className="border-b py-6">
      <ul className="container mx-auto flex justify-end items-center gap-6 px-20">
        <li>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </li>
        <li className="font-bold">Jenny Wilson</li>
      </ul>
    </header>
  )
}
