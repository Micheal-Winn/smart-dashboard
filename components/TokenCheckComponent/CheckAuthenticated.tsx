"use client"
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import Sidebar from "../Sidebar/Sidebar";

const CheckAuthenticated = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");

    console.log("token", token);
    console.log("render");
    if (token) {
      setAuthenticated(true);
      router.push('/')
    } else {
      router.push("/auth");
      setAuthenticated(false);
    }
  }, []);

  return authenticated ? <Sidebar /> : null;
};

export default CheckAuthenticated;
