

import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="text-center py-32">
    <h1 className="text-6xl font-bold text-gray-300">404</h1>
    <p className="text-2xl mt-6">Page not found</p>
    <Link to="/" className="mt-8 inline-block bg-emerald-600 text-white px-8 py-3 rounded-2xl">Back to Home</Link>
  </div>
);

export default NotFound;