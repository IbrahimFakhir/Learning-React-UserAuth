import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import LinkPage from "./components/Linkpage";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* public routes */}
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="linkpage" element={<LinkPage />} />
				<Route path="unauthorized" element={<Unauthorized />} />

				{/* protected routes */}
				<Route path="/" element={<Home />} />
				<Route path="editor" element={<Editor />} />
				<Route path="admin" element={<Admin />} />
				<Route path="lounge" element={<Lounge />} />

				{/* catch rest */}
				<Route path="*" element={<Missing />} />
			</Route>
		</Routes>
	);
}

export default App;
