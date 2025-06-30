import React from "react";

// Card container
export function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", background: "#fff", color: "#000", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", padding: "16px" }}>
      {children}
    </div>
  );
}

// Card header
export function CardHeader({ children }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      {children}
    </div>
  );
}

// Card title
export function CardTitle({ children }) {
  return (
    <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "6px" }}>
      {children}
    </h2>
  );
}

// Card description
export function CardDescription({ children }) {
  return (
    <p style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}>
      {children}
    </p>
  );
}

// Card content
export function CardContent({ children }) {
  return (
    <div style={{ marginTop: "12px" }}>
      {children}
    </div>
  );
}

// Card footer
export function CardFooter({ children }) {
  return (
    <div style={{ marginTop: "16px", borderTop: "1px solid #eee", paddingTop: "12px", display: "flex", justifyContent: "flex-end" }}>
      {children}
    </div>
  );
}
