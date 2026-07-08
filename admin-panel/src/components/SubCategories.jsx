import { useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import DashboardLayout from "../components/layout/DashboardLayout";

const SubCategories = () => {


    const [subCategories, setSubCategories] = useState([]);
    const [categories, setCategories] = useState([]);


    const [formData, setFormData] = useState({
        category: "",
        name: "",
        description: "",
        image: null
    });

    const [editId, setEditId] = useState(null);

    const editSubCategory = (item) => {

        setEditId(item._id);

        setFormData({
            category: item.category?._id || "",
            name: item.name,
            description: item.description,
            image: null
        });

    };



    const getData = async () => {

        try {

            const cat = await api.get("/categories");
            const sub = await api.get("/subcategories");


            setCategories(cat.data.categories);
            setSubCategories(sub.data.subCategories);


        } catch (error) {

            toast.error("Failed loading data");

        }

    };



    useEffect(() => {

        getData();

    }, []);




    const handleChange = (e) => {


        if (e.target.name === "image") {

            setFormData({
                ...formData,
                image: e.target.files[0]
            });

        }
        else {

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


            Object.keys(formData).forEach(key => {

                if (formData[key]) {
                    data.append(
                        key,
                        formData[key]
                    );
                }

            });



            if (editId) {

                await api.put(
                    `/subcategories/${editId}`,
                    data
                );

                toast.success("SubCategory Updated");

            } else {

                await api.post(
                    "/subcategories",
                    data
                );

                toast.success("SubCategory Created");

            }

            setEditId(null);

            setFormData({
                category: "",
                name: "",
                description: "",
                image: null
            });

            getData();


        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Error"
            );

        }

    };




    const deleteSubCategory = async (id) => {

        try {


            await api.delete(
                `/subcategories/${id}`
            );


            toast.success(
                "Deleted"
            );


            getData();


        } catch (error) {

            toast.error("Delete failed");

        }

    };




    return (

        <DashboardLayout>


            <h1>
                SubCategory Management
            </h1>



            <div className="form-card">


                <h2>
                    {editId ? "Update SubCategory" : "Add SubCategory"}
                </h2> <br />



                <form onSubmit={handleSubmit}>


                    <div className="form-grid">


                        <div className="form-group">

                            <label>
                                Select Category
                            </label>


                            <select

                                name="category"

                                value={formData.category}

                                onChange={handleChange}

                                required

                            >


                                <option value="">

                                    Select Category

                                </option>



                                {
                                    categories.map(cat => (

                                        <option

                                            key={cat._id}

                                            value={cat._id}

                                        >

                                            {cat.name}

                                        </option>

                                    ))
                                }



                            </select>


                        </div>




                        <div className="form-group">

                            <label>
                                SubCategory Image
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
                            SubCategory Name
                        </label>


                        <input

                            name="name"

                            value={formData.name}

                            onChange={handleChange}

                            placeholder="Enter subcategory name"

                        />


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
                                "Update SubCategory"
                                :
                                "Save SubCategory"
                        }


                    </button>


                </form>


            </div>





            <div className="table-card">


                <table>


                    <thead>


                        <tr>

                            <th>
                                Image
                            </th>


                            <th>
                                SubCategory
                            </th>


                            <th>
                                Category
                            </th>


                            <th>
                                Actions
                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {
                            subCategories.map(item => (


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

                                        {item.category?.name}

                                    </td>



                                    <td>


                                        <button

                                            className="btn btn-warning"

                                            onClick={() =>
                                                editSubCategory(item)
                                            }

                                        >

                                            Edit

                                        </button>



                                        &nbsp;



                                        <button

                                            className="btn btn-danger"

                                            onClick={() =>
                                                deleteSubCategory(item._id)
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


export default SubCategories;