import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export function LoginForm() {
  return (
    <div className="card flex justify-center items-center space-x-4">
      <div className="linked">
        <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden bg-black">
          <CardContent className="flex justify-center items-center p-6">
            <Link href="https://www.linkedin.com/in/harizhakim/">
              <BsLinkedin className= "text-6xl text-white" />
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="telegram">
        <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden bg-black">
          <CardContent className="flex justify-center items-center p-6">
            <Link href="https://www.linkedin.com/in/harizhakim/">
              <BsLinkedin className="text-6xl text-white" />
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="linked">
        <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden bg-black">
          <CardContent className="flex justify-center items-center p-6">
            <Link href="https://www.linkedin.com/in/harizhakim/">
              <BsLinkedin className=" text-6xl text-white" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}