import React from "react";
import { Button, Input } from "../common";

export const CustomerForm = () => {
  return (
    <form className="flex w-full flex-col gap-2">
      <Input label="Name" placeholder="Enter customer name" />
      <Input label="Phone" placeholder="Enter customer phone" />
      <Input label="Email" placeholder="Enter customer email" />
      <div className="flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button>Create</Button>
      </div>
    </form>
  );
};
