import { useState, useEffect } from "react";
import axios from "axios";
// import Navbar from "../StaticHomePage/navbar/Navbar";

const UserHomePage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const token = localStorage.getItem("access_token");
            const tokenType = localStorage.getItem("token_type") || "Bearer";

            if (!token) {
                setError("No access token found. Please log in.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/user/user_details/",
                    {
                        headers: {
                            Authorization: `${tokenType} ${token}`,
                        },
                    }
                );

                setUserDetails(response.data);
            } catch (err) {
                setError(
                    err.response?.data?.detail || "Failed to fetch user details."
                );
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <>
            <div className="flex mt-8 items-center justify-center">
                <div className="border-2 bg-gray-100 rounded-xl p-10 shadow-black shadow-xl md:p-15">
                    <h2 className="text-3xl font-bold text-center mb-5">
                        Welcome to Your Dashboard!
                    </h2>

                    {loading && (
                        <p className="text-center text-gray-600">Loading user details...</p>
                    )}

                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}

                    {userDetails && (
                        <div className="flex flex-col items-center">
                            <div className="text-lg">
                                <p>
                                    <span className="font-semibold">Name:</span>{" "}
                                    {userDetails.first_name} {userDetails.last_name}
                                </p>
                                <p>
                                    <span className="font-semibold">Email:</span>{" "}
                                    {userDetails.email}
                                </p>
                                <p>
                                    <span className="font-semibold">ID:</span>{" "}
                                    {userDetails.id}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserHomePage;