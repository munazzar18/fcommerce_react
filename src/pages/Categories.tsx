import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 p-4 bg-my_white">
          <div>
            <h3 className="text-xl font-bold">Filters</h3>
          </div>
        </div>
        <div className="col-span-9 bg-my_white p-4">
          <div className="flex justify-between align-middle">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Category Name</h3>
            </div>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-96"
              />
              <button className="absolute right-0 top-0 mt-2 mr-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="divider mb-4"></div>
          <div>Categories Array Here...</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
