import { Link } from "react-router-dom";

const Card = ({ title, description, route }) => {
  return (
    <div className="w-[70vw] md:w-[40vw] lg:w-fit justify-self-center bg-[#212121ca] py-5 px-2 text-white shadow-sm rounded-2xl text-center hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-slate-300 mb-6">{description}</p>
      <Link to={route}>
        <button className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-200 transition-colors">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Card;
