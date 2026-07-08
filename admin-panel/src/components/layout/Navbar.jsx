const Navbar = () => {

    const admin = JSON.parse(localStorage.getItem("admin"));

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (

        <div className="navbar">

            <div>

                <h2 className="page-title">
                    Admin Dashboard
                </h2>

                <small>
                    {today}
                </small>

            </div>

            <div className="user-box">

                Welcome,
                <br />
                <strong>
                    {admin?.name || "Admin"}
                </strong>

            </div>

        </div>

    );

};

export default Navbar;