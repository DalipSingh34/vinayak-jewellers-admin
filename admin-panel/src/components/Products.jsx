import { useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import DashboardLayout from "../components/layout/DashboardLayout";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        name: "",
        description: "",
        price: "",
        weight: "",
        material: "",
        purity: "",
        stock: "",
        featured: false,
        status: true,
        seoTitle: "",
        seoDescription: "",
        images: []
    });

    const [editId, setEditId] = useState(null);

    const editProduct = (product) => {

        setEditId(product._id);

        setFormData({
            category: product.category?._id || "",
            subCategory: product.subCategory?._id || "",
            name: product.name,
            description: product.description,
            price: product.price,
            weight: product.weight,
            material: product.material,
            purity: product.purity,
            stock: product.stock,
            featured: product.featured,
            status: product.status,
            seoTitle: product.seoTitle,
            seoDescription: product.seoDescription,
            images: []
        });

    };


    const getData = async () => {

        try {

            const productRes = await api.get("/products");
            const categoryRes = await api.get("/categories");
            const subCategoryRes = await api.get("/subcategories");

            setProducts(productRes.data.products);
            setCategories(categoryRes.data.categories);
            setSubCategories(subCategoryRes.data.subCategories);

        } catch (error) {

            toast.error("Failed loading data");

        }

    };


    useEffect(() => {

        getData();

    }, []);


    const handleChange = (e) => {

        const { name, value, type, checked, files } = e.target;

        if (type === "file") {

            setFormData({
                ...formData,
                images: files
            });

        }

        else if (type === "checkbox") {

            setFormData({
                ...formData,
                [name]: checked
            });

        }

        else {

            setFormData({
                ...formData,
                [name]: value
            });

        }

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = new FormData();

            Object.keys(formData).forEach(key => {

                if (key !== "images") {

                    data.append(key, formData[key]);

                }

            });


            for (let i = 0; i < formData.images.length; i++) {

                data.append("images", formData.images[i]);

            }


            if (editId) {

                await api.put(
                    `/products/${editId}`,
                    data
                );

                toast.success("Product Updated");

            } else {

                await api.post(
                    "/products",
                    data
                );

                toast.success("Product Added");

            }

            setEditId(null);

            setFormData({
                category: "",
                subCategory: "",
                name: "",
                description: "",
                price: "",
                weight: "",
                material: "",
                purity: "",
                stock: "",
                featured: false,
                status: true,
                seoTitle: "",
                seoDescription: "",
                images: []
            });

            getData();

        }


        catch (error) {

            toast.error(
                error.response?.data?.message || "Error"
            );

        }

    };


    const deleteProduct = async (id) => {

        try {

            await api.delete(`/products/${id}`);

            toast.success("Deleted");

            getData();

        }

        catch (error) {

            toast.error("Delete failed");

        }

    };


    return (

        <DashboardLayout>


            <h1>
                Product Management
            </h1>



            <div className="form-card">


                <h2>
                    {editId ? "Update Product" : "Add Product"}
                </h2> <br />



                <form onSubmit={handleSubmit}>


                    <div className="form-grid">


                        <div className="form-group">

                            <label>
                                Category
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
                                Sub Category
                            </label>


                            <select

                                name="subCategory"

                                value={formData.subCategory}

                                onChange={handleChange}

                                required

                            >


                                <option value="">
                                    Select SubCategory
                                </option>


                                {
                                    subCategories.map(sub => (

                                        <option

                                            key={sub._id}

                                            value={sub._id}

                                        >

                                            {sub.name}

                                        </option>

                                    ))

                                }


                            </select>


                        </div>



                        <div className="form-group">

                            <label>
                                Product Name
                            </label>


                            <input

                                name="name"

                                value={formData.name}

                                onChange={handleChange}

                            />

                        </div>



                        <div className="form-group">

                            <label>
                                Price
                            </label>


                            <input

                                type="number"

                                name="price"

                                value={formData.price}

                                onChange={handleChange}

                            />


                        </div>



                        <div className="form-group">

                            <label>
                                Weight
                            </label>


                            <input

                                name="weight"

                                value={formData.weight}

                                onChange={handleChange}

                            />

                        </div>




                        <div className="form-group">

                            <label>
                                Material
                            </label>


                            <input

                                name="material"

                                value={formData.material}

                                onChange={handleChange}

                            />

                        </div>



                        <div className="form-group">

                            <label>
                                Purity
                            </label>


                            <input

                                name="purity"

                                value={formData.purity}

                                onChange={handleChange}

                            />

                        </div>



                        <div className="form-group">

                            <label>
                                Stock
                            </label>


                            <input

                                type="number"

                                name="stock"

                                value={formData.stock}

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

                        />


                    </div>




                    <div className="form-grid">


                        <div className="form-group">

                            <label>
                                SEO Title
                            </label>


                            <input

                                name="seoTitle"

                                value={formData.seoTitle}

                                onChange={handleChange}

                            />


                        </div>



                        <div className="form-group">

                            <label>
                                Images
                            </label>


                            <input

                                type="file"

                                multiple

                                onChange={handleChange}

                            />


                        </div>


                    </div>



                    <br />


                    <button

                        className="btn btn-primary"

                    >

                        {
                            editId
                                ?
                                "Update Product"
                                :
                                "Save Product"
                        }

                    </button>


                </form>


            </div>





            <div className="table-card">


                <table>


                    <thead>

                        <tr>

                            <th>
                                Images
                            </th>

                            <th>
                                Product
                            </th>

                            <th>
                                Category
                            </th>

                            <th>
                                Price
                            </th>

                            <th>
                                Stock
                            </th>

                            <th>
                                Actions
                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {
                            products.map(product => (


                                <tr key={product._id}>


                                    <td>


                                        {
                                            product.images?.map((img, index) => (

                                                <img

                                                    key={index}

                                                    src={`http://localhost:3002/${img}`}

                                                    className="table-img"

                                                    alt={product.name}

                                                />

                                            ))

                                        }


                                    </td>



                                    <td>

                                        {product.name}

                                    </td>



                                    <td>

                                        {product.category?.name}

                                    </td>



                                    <td>

                                        ₹ {product.price}

                                    </td>



                                    <td>

                                        {product.stock}

                                    </td>



                                    <td>


                                        <button

                                            className="btn btn-warning"

                                            onClick={() =>
                                                editProduct(product)
                                            }

                                        >

                                            Edit

                                        </button>



                                        <button

                                            className="btn btn-danger"

                                            onClick={() =>
                                                deleteProduct(product._id)
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

export default Products;