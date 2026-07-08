import { useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import DashboardLayout from "../components/layout/DashboardLayout";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        status: true,
        image: null
    });

    const [editId, setEditId] = useState(null);


    const getCategories = async () => {

        try {

            const res = await api.get("/categories");

            setCategories(res.data.categories);

        } catch (error) {

            toast.error("Failed to fetch categories");

        }

    };


    useEffect(() => {

        getCategories();

    }, []);



    const handleChange = (e) => {

        if (e.target.name === "image") {

            setFormData({
                ...formData,
                image: e.target.files[0]
            });

        } else {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });

        }

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("name", formData.name);
            data.append("description", formData.description);
            data.append("status", formData.status);

            if (formData.image) {
                data.append("image", formData.image);
            }

            if (editId) {

                await api.put(
                    `/categories/${editId}`,
                    data
                );

                toast.success("Category Updated");

            } else {

                await api.post(
                    "/categories",
                    data
                );

                toast.success("Category Added");

            }

            setFormData({
                name: "",
                description: "",
                status: true,
                image: null
            });

            setEditId(null);

            getCategories();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Error"
            );

        }

    };

    const editCategory = (item) => {

        setEditId(item._id);

        setFormData({

            name: item.name,

            description: item.description,

            status: item.status,

            image: null

        });

    };


    const deleteCategory = async (id) => {


        try {

            await api.delete(
                `/categories/${id}`
            );


            toast.success(
                "Deleted"
            );


            getCategories();


        } catch (error) {

            toast.error("Delete failed");

        }

    };



    return (

        <DashboardLayout>

            <h1>
                Category Management
            </h1>


            {/* Add / Edit Form */}

            <div className="form-card">


                <h2>
                    {editId ? "Update Category" : "Add Category"}
                </h2> <br />


                <form onSubmit={handleSubmit}>


                    <div className="form-grid">


                        <div className="form-group">

                            <label>
                                Category Name
                            </label>

                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter category name"
                                required
                            />

                        </div>



                        <div className="form-group">

                            <label>
                                Image
                            </label>

                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                            />

                        </div>


                    </div>



                    <div className="form-group">

                        <label>
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                        />

                    </div>


                    <br />


                    <button
                        className="btn btn-primary"
                    >

                        {
                            editId
                                ?
                                "Update Category"
                                :
                                "Save Category"
                        }

                    </button>


                </form>


            </div>





            {/* Category Table */}


            <div className="table-card">


                <table>


                    <thead>

                        <tr>

                            <th>
                                Image
                            </th>

                            <th>
                                Name
                            </th>

                            <th>
                                Description
                            </th>

                            <th>
                                Actions
                            </th>

                        </tr>


                    </thead>



                    <tbody>


                        {
                            categories.map(item => (


                                <tr key={item._id}>


                                    <td>

                                        {
                                            item.image &&

                                            <img

                                                src={`http://localhost:3002/${item.image}`}

                                                className="table-img"

                                                alt={item.name}

                                            />

                                        }


                                    </td>



                                    <td>

                                        {item.name}

                                    </td>



                                    <td>

                                        {item.description}

                                    </td>



                                    <td>


                                        <button

                                            className="btn btn-warning"

                                            onClick={() =>
                                                editCategory(item)
                                            }

                                        >

                                            Edit

                                        </button>



                                        &nbsp;



                                        <button

                                            className="btn btn-danger"

                                            onClick={() =>
                                                deleteCategory(item._id)
                                            }

                                        >

                                            Delete

                                        </button>


                                    </td>


                                </tr>


                            ))
                        }


                    </tbody>


                </table>


            </div>



        </DashboardLayout>

    );

};


export default Categories;