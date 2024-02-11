import { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { ToastContainer, toast } from "react-toastify";
import { type Category } from "../helper/interfaces";

const AddProduct = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    quantity: "",
    images: [""],
    categoryId: "",
    description: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);

  const getAllCategories = async () => {
    const res = await ApiService.get("category");
    setCategories(res.data.data);
  };
  const handleFileChange = async (e: any) => {
    const files = e.target.files;
    const filePathData = new FormData();
    for (let i = 0; i < files.length; i++) {
      filePathData.append("files", files[i]);
    }
    try {
      const res = await ApiService.upload("product/upload", filePathData);
      setFormData({ ...formData, images: res.data.data });
      toast.success(res.data.message);
      setSubmitDisabled(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await ApiService.post("product", formData);
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="w-[900px] w-min-[600px]">
      <div className="flex justify-center w-full">
        <div className="p-8 rounded-xl bg-my_white w-full">
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                name="title"
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </label>

            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Quantity</span>
                  </div>
                  <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered w-full "
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Upload Images</span>
                  </div>
                  <input
                    accept="images/*"
                    type="file"
                    multiple
                    className="file-input file-input-bordered w-full "
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    name="categoryId"
                    className="select select-bordered w-full "
                    onChange={handleChange}
                  >
                    <option value={""}>Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                placeholder="Product Description"
                className="input input-bordered w-full min-h-[150px]"
                onChange={handleChange}
              />
            </label>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-outline w-full"
                disabled={submitDisabled}
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
