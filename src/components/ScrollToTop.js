import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa yolu (pathname) her değiştiğinde en tepeye (0,0) ışınlan
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}