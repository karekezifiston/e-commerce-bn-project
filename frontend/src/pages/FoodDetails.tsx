import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
// import timeFormat from '../lib/timeFormat';
// import DateSelect from '../components/DateSelect';
import VenueCard from '../components/FoodCard';
import Loading from '../components/Loading';

const FoodDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    if (show) {
      setShow({
        venue: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 pt-30">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
        <img
          src={show.venue.poster_path}
          alt=""
          className="max-w-[280px] rounded-xl object-cover mx-auto"
        />

        <div className="relative flex flex-col gap-4">
          <p className="text-[#b5b5b5] font-bold uppercase">ENGLISH</p>
          <h1 className="font-semibold max-w-[400px] text-2xl">{show.venue.title}</h1>
          <div className="flex items-center gap-2 text-[#bbb]">
            <StarIcon className="text-white fill-white/80 w-5 h-5" />
            {show.venue.vote_average.toFixed(1)} User Rating
          </div>
          <p className="text-[#999] text-sm leading-relaxed max-w-[600px]">
            {show.venue.overview}
          </p>
          {/* <p className="text-[#ccc]">
            {timeFormat(show.venue.runtime)} •{' '}
            {show.venue.genres.map((genre) => genre.name).join(', ')} •{' '}
            {show.venue.release_date.split('-')[0]}
          </p> */}

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-8 py-3 text-sm bg-black text-white rounded-lg hover:bg-[#444] transition">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>
            <a
              href="#dateSelect"
              className="flex items-center gap-2 px-8 py-3 text-sm bg-[#ededed] text-[#585858] rounded-lg hover:bg-white/60 transition"
            >
              Book Venue
            </a>
            <button className="bg-[#444] p-2 rounded-lg cursor-pointer">
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>


      {/* <DateSelect dateTime={show.dateTime} id={id} /> */}

      {/* SUGGESTED VENUES */}
      <p className="text-lg font-medium mt-16 mb-4">You May Also Like</p>
      <div className="flex flex-wrap gap-8 justify-center">
        {dummyShowsData.slice(0, 5).map((venue, index) => (
          <VenueCard key={index} venue={venue} />
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      <div className="flex justify-center mt-16">
        <button
          className="px-8 py-3 text-sm bg-white text-black rounded-lg hover:bg-white/60 transition"
          onClick={() => {
            navigate('/venues');
            scrollTo(0, 0);
          }}
        >
          Show More
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default FoodDetails;
