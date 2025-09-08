
import { dummyShowsData } from "../assets/assets";  // no extension needed


const Food = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative px-4 mt-12 mb-[15rem] min-h-[80vh] overflow-hidden">
      <h1 className="text-xl font-medium my-4 text-start pl-[10%]">Now Showing</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {dummyShowsData.map((venue) => (
          <VenueCard venue={venue} key={venue._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-center">No Food available</h2>
    </div>
  );
};

export default Food;
