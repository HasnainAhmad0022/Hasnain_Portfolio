import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
