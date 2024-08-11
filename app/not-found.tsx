import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
          <p className="text-6xl font-semibold text-gray-700">
            Page not found!
          </p>
          {/* <p className="text-2xl text-gray-500 mt-2">
            Sorry, the page you are looking for does not exist.
          </p> */}
          <Button asChild variant={"link"}>
            <Link href="/">Go back to the main page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
