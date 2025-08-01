import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { app } from "../../firebase";
import "./SignInRegister.css";
import { getApp } from "firebase/app";

const SignInRegister = ({
  show,
  onClose,
  user,
  setUser,
  playClick,
  latestResult,
}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [displayNameInput, setDisplayNameInput] = useState(
    user?.displayName || user?.email?.split("@")[0] || ""
  );

  if (!show) return null;

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleGoogleLogin = async () => {
    playClick && playClick();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setDisplayNameInput(
        result.user.displayName || result.user.email.split("@")[0]
      );
      // Save user info and score to Firestore
      const db = getFirestore(getApp());
      const userDoc = doc(db, "games", "wordle", "users", result.user.uid);
      const userData = {
        createdAt: new Date().toISOString(),
        displayName: result.user.displayName || "",
        email: result.user.email || "",
        username:
          result.user.displayName || result.user.email.split("@")[0] || "",
      };
      if (latestResult) {
        userData.results = arrayUnion({
          dateOfAttempt: latestResult.date,
          timeTaken: latestResult.timeTaken,
          numberOfTries: latestResult.tries,
        });
      }
      await setDoc(userDoc, userData, { merge: true });
      onClose && onClose();
    } catch (error) {
      setError("Google login failed.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    playClick && playClick();
    setError("");
    const auth = getAuth(app);
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      setUser(result.user);
      setDisplayNameInput(
        result.user.displayName || result.user.email.split("@")[0]
      );
      // Save user info and score to Firestore
      const db = getFirestore(getApp());
      const userDoc = doc(db, "games", "wordle", "users", result.user.uid);
      const userData = {
        createdAt: new Date().toISOString(),
        displayName: result.user.displayName || "",
        email: result.user.email || "",
        username:
          result.user.displayName || result.user.email.split("@")[0] || "",
      };
      if (latestResult) {
        userData.results = arrayUnion({
          dateOfAttempt: latestResult.date,
          timeTaken: latestResult.timeTaken,
          numberOfTries: latestResult.tries,
        });
      }
      await setDoc(userDoc, userData, { merge: true });
      onClose && onClose();
    } catch (err) {
      setError("Invalid credentials or user does not exist.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    playClick && playClick();
    setError("");
    if (
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const auth = getAuth(app);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      await updateProfile(result.user, { displayName: form.username });
      setUser({ ...result.user, displayName: form.username });
      setDisplayNameInput(form.username);

      const db = getFirestore(getApp());
      const userDoc = doc(db, "games", "wordle", "users", result.user.uid);
      const userData = {
        createdAt: new Date().toISOString(),
        displayName: form.username,
        email: result.user.email || "",
        username: form.username,
      };
      if (latestResult) {
        userData.results = arrayUnion({
          dateOfAttempt: latestResult.date,
          timeTaken: latestResult.timeTaken,
          numberOfTries: latestResult.tries,
        });
      }
      await setDoc(userDoc, userData, { merge: true });
      onClose && onClose();
    } catch (err) {
      setError("Registration failed. " + (err.message || ""));
    }
  };

  const handleLogout = async () => {
    playClick && playClick();
    const auth = getAuth(app);
    await signOut(auth);
    setUser(null);
    onClose && onClose();
  };

  const handleDisplayNameSave = async () => {
    if (!displayNameInput.trim()) return;
    try {
      const auth = getAuth(app);
      // Update Firebase Auth profile
      await updateProfile(auth.currentUser, {
        displayName: displayNameInput.trim(),
      });
      setUser({ ...user, displayName: displayNameInput.trim() });
      setEditingDisplayName(false);

      // Update Firestore user document
      const db = getFirestore(getApp());
      await updateDoc(
        doc(db, "games", "wordle", "users", auth.currentUser.uid),
        {
          displayName: displayNameInput.trim(),
        }
      );
    } catch (err) {
      setError("Failed to update display name.");
    }
  };

  return (
    <div className="wordle-modal-overlay" onClick={onClose}>
      <div
        className="wordle-modal"
        style={{
          width: "350px",
          height: "auto",
          maxWidth: "90vw",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wordle-modal-header">
          <h2 className="wordle-modal-title">
            {user ? "Account" : isRegister ? "Register" : "Login"}
          </h2>
        </div>
        {!user ? (
          <form
            className="wordle-auth-form"
            onSubmit={isRegister ? handleRegister : handleLogin}
          >
            {error && <div className="wordle-auth-error">{error}</div>}
            {isRegister ? (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="email"
                  required
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="new-password"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="new-password"
                  required
                />
                <button className="wordle-titlepage-btn" type="submit">
                  Register
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="email"
                  placeholder="Username / Email"
                  value={form.email}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInput}
                  className="wordle-auth-input"
                  autoComplete="current-password"
                  required
                />
                <button className="wordle-titlepage-btn" type="submit">
                  Log In
                </button>
                or
                <button
                  type="button"
                  className="wordle-titlepage-btn wordle-google-btn"
                  onClick={handleGoogleLogin}
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="wordle-google-icon"
                  />
                  Continue with Google
                </button>
              </>
            )}

            {!isRegister ? (
              <button
                type="button"
                className="wordle-register-link"
                onClick={() => setIsRegister(true)}
              >
                Register here
              </button>
            ) : (
              <button
                type="button"
                className="wordle-register-link"
                onClick={() => setIsRegister(false)}
              >
                Login here
              </button>
            )}
          </form>
        ) : (
          <div className="wordle-auth-account">
            <div className="wordle-auth-displayname-row">
              <div className="wordle-auth-displayname-label">Display Name</div>
              {!editingDisplayName ? (
                <div className="wordle-auth-displayname-value">
                  <span>{user.displayName || user.email}</span>
                  <button
                    className="wordle-auth-pencil"
                    onClick={() => {
                      setEditingDisplayName(true);
                      setDisplayNameInput(
                        user.displayName || user.email.split("@")[0]
                      );
                    }}
                    aria-label="Edit Display Name"
                  >
                    <FaPencilAlt size={14} />
                  </button>
                </div>
              ) : (
                <div className="wordle-auth-displayname-edit">
                  <input
                    className="wordle-auth-input"
                    type="text"
                    value={displayNameInput}
                    onChange={(e) => setDisplayNameInput(e.target.value)}
                    maxLength={32}
                  />
                  <button
                    className="wordle-titlepage-btn"
                    onClick={handleDisplayNameSave}
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    className="wordle-titlepage-btn"
                    onClick={() => {
                      setEditingDisplayName(false);
                      setDisplayNameInput(
                        user.displayName || user.email.split("@")[0]
                      );
                    }}
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <button className="wordle-titlepage-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInRegister;
