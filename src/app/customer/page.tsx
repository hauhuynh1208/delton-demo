import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CustomerContainer from "@/components/Customer/Customer";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

const Customer = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Customer" />
      <CustomerContainer />
    </DefaultLayout>
  );
};

export default Customer;
