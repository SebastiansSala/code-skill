import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import { Button } from '../../components/ui/button'

export default function HomeMain() {
  return (
    <main className="container mx-auto flex-1 w-full overflow-y-auto p-20">
      <h3 className="text-3xl font-bold">Frontend</h3>
      <p className="max-w-xl mt-4">
        Este conjunto de tests evalúa tus conocimientos sobre el desarrollo
        frontend, que se enfoca en la interfaz de usuario y la experiencia del
        usuario en un sitio web o una aplicación. Preguntas sobre HTML, CSS,
        JavaScript y otros temas relacionados pueden formar parte de esta
        categoría.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-10">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-xl">HTML</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex py-4 justify-end items-center bg-[#f6f6f9]">
            <Button className="bg-white border font-bold text-black hover:bg-red-300">
              Start test
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-xl">CSS</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex py-4 justify-end items-center bg-[#f6f6f9]">
            <Button className="bg-white border font-bold text-black hover:bg-red-300">
              Start test
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-xl">Javascript DOM</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="flex py-4 justify-end items-center bg-[#f6f6f9]">
            <Button className="bg-white border font-bold text-black hover:bg-red-300">
              Start test
            </Button>
          </CardFooter>
        </Card>
      </ul>
    </main>
  )
}
