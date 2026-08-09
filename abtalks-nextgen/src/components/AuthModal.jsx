import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase.js";

export default function AuthModal({ isOpen, onClose }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Signed in user:", result.user);
      onClose();
    } catch (err) {
      console.error(err);
      setError("Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>✕</button>
        <h2 style={{ marginBottom: "10px", fontSize: "1.6rem" }}>Welcome to ABTalks</h2>
        <p style={{ color: "#94a3b8", marginBottom: "20px", fontSize: "0.9rem" }}>
          Sign in with your Google account to access your 60-Day Challenge Dashboard & Hackathons.
        </p>

        <button style={styles.googleBtn} onClick={handleGoogleSignIn} disabled={loading}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            style={{ width: "18px" }}
          />
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        {error && <p style={{ color: "#f87171", marginTop: "12px", fontSize: "0.85rem" }}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#0f172a",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "16px",
    padding: "32px",
    width: "90%", maxWidth: "400px",
    position: "relative",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  },
  closeBtn: {
    position: "absolute", top: "15px", right: "20px",
    background: "none", border: "none", color: "#94a3b8",
    fontSize: "1.2rem", cursor: "pointer",
  },
  googleBtn: {
    width: "100%", padding: "12px",
    borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)", color: "#fff",
    fontWeight: "600", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
  }
};
