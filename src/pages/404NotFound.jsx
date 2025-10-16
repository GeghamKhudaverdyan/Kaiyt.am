import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
     
    return (
         <div style={{ padding: 20 }}>
            <h1>404 Page Not Found</h1>
            <p>Current path: {window.location.pathname}</p>
            <p>Full URL: {window.location.href}</p>
            <Link to="/">Go Home</Link>
          </div>
    );
}