import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast } from "react-toastify";


const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/auth/login", formData);


            localStorage.setItem(
                "token",
                res.data.token
            );


            localStorage.setItem(
                "admin",
                JSON.stringify(res.data.user)
            );


            toast.success("Login successful");


            navigate("/dashboard");


        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login failed"
            );

        }

    };


    return (

        <div style={{
            width: "350px",
            margin: "100px auto"
        }}>


            <h2>
                Admin Login
            </h2>


            <form onSubmit={handleSubmit}>


                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />


                <br /><br />


                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />


                <br /><br />


                <button type="submit">
                    Login
                </button>


            </form>


        </div>

    );

};


export default Login;