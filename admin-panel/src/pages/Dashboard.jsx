
import { useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import DashboardLayout from "../components/layout/DashboardLayout";


const Dashboard = () => {

    const admin = JSON.parse(localStorage.getItem("admin"));

    const [stats, setStats] = useState({

        categories: 0,
        subCategories: 0,
        products: 0

    });


    const getStats = async () => {

        try {

            const [
                categoryRes,
                subCategoryRes,
                productRes
            ] = await Promise.all([

                api.get("/categories"),
                api.get("/subcategories"),
                api.get("/products")

            ]);


            setStats({

                categories:
                    categoryRes.data.categories.length,

                subCategories:
                    subCategoryRes.data.subCategories.length,

                products:
                    productRes.data.products.length

            });


        } catch (error) {

            toast.error("Dashboard loading failed");

        }

    };


    useEffect(() => {

        getStats();

    }, []);



    return (

        <DashboardLayout>


            <h1>
                Overview
            </h1>


            <div className="stats-grid">


                <div className="stat-card">

                    <h2>
                        {stats.categories}
                    </h2>

                    <p>
                        Total Categories
                    </p>

                </div>



                <div className="stat-card">

                    <h2>
                        {stats.subCategories}
                    </h2>

                    <p>
                        Total Sub Categories
                    </p>

                </div>



                <div className="stat-card">

                    <h2>
                        {stats.products}
                    </h2>

                    <p>
                        Total Products
                    </p>

                </div>


            </div>



        </DashboardLayout>

    );

};


export default Dashboard;