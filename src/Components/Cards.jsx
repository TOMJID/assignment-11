import incidents from "../assets/incidents.json";
function Card() {
  return (
    <>
      <div className="flex justify-around flex-wrap gap-4 items-center">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="group hover:scale-105 transition-all flex flex-col justify-center items-start w-72 rounded-t-xl rounded-b-lg cursor-pointer">
            <div className="relative ">
              <img src={incident["img-url"]} className="rounded-t-xl p-0.5 " />
              <img
                src="./badge.svg"
                alt="badge"
                className="absolute top-2 right-2 z-100 group-hover:scale-90 transition-all"
              />
            </div>
            <div className="space-x-2 mt-1 capitalize">
              <h2 className="text-lg font-semibold">{incident["tittle"]}</h2>
              <h5 className="text-zinc-400">{incident["location"]}</h5>
              <h6 className="text-lg font-semibold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(incident["cost"])}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
