import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const doLogout = useCallback(async () => {
    try {
      await firebaseSignOut(auth);
    } catch (e) {
      console.error('Error during signOut', e);
    } finally {
      navigate('/admin');
    }
  }, [navigate]);

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = () => doLogout();

  // Inactivity auto-logout (10 minutes)
  const clearInactivity = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetInactivity = useCallback(() => {
    clearInactivity();
    // 10 minutes
    timerRef.current = setTimeout(() => {
      doLogout();
    }, 10 * 60 * 1000);
  }, [doLogout]);

  useEffect(() => {
    const activityEvents = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];

    const attach = () => {
      activityEvents.forEach((ev) => window.addEventListener(ev, resetInactivity));
      resetInactivity();
    };

    const detach = () => {
      activityEvents.forEach((ev) => window.removeEventListener(ev, resetInactivity));
      clearInactivity();
    };

    if (user) {
      attach();
    } else {
      detach();
    }

    return () => detach();
  }, [user, resetInactivity]);

  // Force logout on refresh/close (best-effort)
  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        // best effort to sign out before refresh
        firebaseSignOut(auth);
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
