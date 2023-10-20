import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { AuthLanding } from "../AuthLanding/AuthLanding";
import { ShopSIM } from "../ShopSIM/ShopSIM";
import { BlogSIM } from "../BlogSIM/BlogSIM";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopSIM />} />
        <Route path="/blog" element={<BlogSIM />} />
        <Route path="/authform" element={<AuthLanding />} />
      </Routes>
    </>
  );
};
