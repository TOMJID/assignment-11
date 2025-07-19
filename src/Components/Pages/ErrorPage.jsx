import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <section className="h-[80vh] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-bold">
          This page hasn't created yet
        </h1>
        <Link to="/">
          <Button className="bg-orange-600 mt-4 mx-auto block px-8 py-2 rounded-md">
            Go Home
          </Button>
        </Link>
      </section>
    </>
  );
}

export default ErrorPage;
