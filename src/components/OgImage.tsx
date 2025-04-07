import React from "react";

const OgImage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-.02em",
        fontWeight: 700,
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #333333 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Static background elements */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(43, 127, 255, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 70% 70%, rgba(43, 127, 255, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Main logo container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "24px 32px",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            background: "#2b7fff",
            borderRadius: "8px",
            boxShadow: "0 0 20px rgba(43, 127, 255, 0.5)",
          }}
        />
        <span
          style={{
            fontSize: 28,
            color: "white",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            fontWeight: 700,
          }}
        >
          raop.dev
        </span>
      </div>
    </div>
  );
};

export default OgImage;
