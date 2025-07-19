import { Button } from "@heroui/button";
function ErrorPage() {
  return (
    <>
      <section className="h-[80vh] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-bold">
          This page hasn't created yet
        </h1>
        <Button className="bg-orange-600 mt-4 mx-auto px-8 py-2 rounded-md">
          {" "}
          Go Back{" "}
        </Button>
      </section>
    </>
  );
}

export default ErrorPage;
