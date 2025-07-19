import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useNavigate } from "react-router-dom";
function GetStarted() {
  const navigate = useNavigate();
  const points = [1, 2, 3];
  const cardList = [
    {
      img: "/icon1.svg",
      title: "What type of incident! ",
      disc: "Choose the category that best describes the incident",
    },
    {
      img: "/icon2.svg",
      title: "Tell us about the incident? ",
      disc: "Let’s connect the dots and see where to start.",
    },
    {
      img: "/icon3.svg",
      title: "Where did the incident occur? ",
      disc: "Let’s connect the dots and see when it start.",
    },
  ];
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center h-full ">
          <h1 className="mt-16 text-4xl font-bold mb-4">Let's get started</h1>
          <p className="px-6 text-md text-center max-w-2xl text-balance text-zinc-400">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>
        {/* Horizontal line */}
        <div className="py-6 hidden md:block">
          <div className="relative flex items-center justify-between w-xl mx-auto">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-1 bg-zinc-200" />
            </div>

            {/* Timeline points */}
            {points.map((_, idx) => (
              <div
                key={idx}
                className="relative z-10 w-6 h-6  bg-zinc-200 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* card section */}
        <div className="flex flex-wrap justify-around md:justify-center gap-4 md:gap-8">
          {cardList.map((data, index) => (
            <Card key={index} isPressable shadow="sm" className="w-60 mt-4">
              <CardBody className="overflow-visible p-0">
                <Image
                  className="w-fit object-cover h-[140px] p-2"
                  src={data.img}
                  alt={data.title}
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start p-4 text-start">
                <b className="font-bold max-w-32 text-xl">{data.title}</b>
                <p className="text-sm max-w-64 pb-2 text-default-500">
                  {data.disc}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          onClick={() => navigate("/incidents/step1")}
          radius="sm"
          className="mx-auto px-7 text-white text-md block mt-4 bg-orange-600">
          Get Started
        </Button>
      </section>
    </>
  );
}

export default GetStarted;
