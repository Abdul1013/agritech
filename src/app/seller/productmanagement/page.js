"use client"
import SideNav from "@/components/SideNav";
import UploadForm from "@/components/UploadForm";
import ProductListing from "@/components/ProductListing"; // Ensure this is imported
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ProductManagement from "@/components/ProductManagement";

function Page() {
  const [activeComponent, setActiveComponent] = useState("uploadForm"); // Default component

  const router = useRouter();
  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);

  useEffect(() => {
      if (role === "buyer") 
        router.push("/buyer/marketplace");
  }, [authLoading, roleLoading, role, router]);

  if (authLoading || roleLoading) {
    return <Loading />;
  }


  return (
    <Layout>
      <SideNav
        option1={"Dashboard"}
        option2={"Product management"}
        option3={"Order Management"}
        option4={"Payment Management"}
        userType={"Seller"}
      />
      <ProductManagement/>
    </Layout>
  );
}

export default Page;