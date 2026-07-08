import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("admin");

        navigate("/");

    };

    return (

        <aside className="sidebar">

            <div className="sidebar-top">

                <div className="logo">

                    💎 Vinayak Jewellers

                </div>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    🏠 Dashboard
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    📂 Categories
                </NavLink>

                <NavLink
                    to="/subcategories"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    📁 Sub Categories
                </NavLink>

                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    💍 Products
                </NavLink>

            </div>

            <div className="sidebar-bottom">

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    🚪 Logout
                </button>

            </div>

        </aside>

    );

};

export default Sidebar;