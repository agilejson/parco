// import "./Login.css";
// import Avatar from "../assets/account_circle_black_48dp.svg";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import { CartContext } from "../contexts/CartContext";
// import { WishlistContext } from "../contexts/WishlistContext";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//     const { isUserLogin, name, loginWithCredential, logout } =
//         useContext(AuthContext);
//     const { dispatch: cartDispatch } = useContext(CartContext);
//     const { dispatch: wishlistDispatch } = useContext(WishlistContext);
//     const [credential, setCredential] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setCredential((credential) => ({
//             ...credential,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const loginStatus = await loginWithCredential(
//             credential.email,
//             credential.password
//         );

//         if (loginStatus === 403) {
//             toast.error("Wrong Password!", {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         } else if (loginStatus === 401) {
//             toast.error("User Not Found!", {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//     };

//     const handleLogout = () => {
//         cartDispatch({
//             type: "RESET_CART",
//         });
//         wishlistDispatch({
//             type: "RESET_WISHLIST",
//         });
//         logout();
//     };
//     return (
//         <div className="login">
//             {isUserLogin ? (
//                 <div className="logged-in-container">
//                     <img
//                         className="logged-in__image mt-2"
//                         src={Avatar}
//                         alt="Avatar Logo"
//                     />
//                     <div className="heading--h6 mt-1 mb-1">Hi {name}!</div>
//                     <button className="btn" onClick={handleLogout}>
//                         Logout
//                     </button>
//                 </div>
//             ) : (
//                 <>
//                     <div className="login-from-container">
//                         <div className="heading heading--h4 login-heading">
//                             Welcome Back!
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="input-text-wrapper mb-1">
//                                 <input
//                                     className="input-text  input-text-email"
//                                     type="text"
//                                     placeholder="Email"
//                                     name="email"
//                                     value={credential.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <div className="input-text-wrapper">
//                                 <input
//                                     className="input-text input-text-password"
//                                     type="password"
//                                     placeholder="Password"
//                                     name="password"
//                                     value={credential.password}
//                                     onChange={handleChange}
//                                 />
//                             </div>

//                             <button className="btn btn--md login-btn mt-1 mb-1">
//                                 Login
//                             </button>
//                         </form>

//                         <Link
//                             className="btn btn--link login-btn-link"
//                             to="/signup"
//                         >
//                             Don't Have Account Create One!
//                         </Link>
//                     </div>
//                 </>
//             )}
//             <ToastContainer />
//         </div>
//     );
// };

// export default Login;

const Login = () => {
    return <div>Login</div>;
};

export default Login;
