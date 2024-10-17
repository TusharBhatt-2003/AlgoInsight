import { Link } from "react-router-dom";

const DSAProject = ({ title, description, id }) => {
  return (
    <div className="w-[70vw] md:w-[40vw] lg:w-fit justify-self-center p-6 bg-[#212121ca] text-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-200 mb-6">{description}</p>
      <Link to={`/concept/${id}`}>
        <button className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600 transition-colors">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default DSAProject;
