"use client";
import React from "react";
import { Button, Card, Input, Modal } from "../common";
import { CustomerData, customerData } from "./customerData";
import moment from "moment";

const CustomerContainer = () => {
  const [data, updateData] = React.useState(customerData);
  const [form, updateForm] = React.useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isOpenForm, setIsOpenForm] = React.useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = React.useState<boolean>(false);

  const handleCreateCustomer = () => {
    const formData = {
      ...form,
      id: customerData.length + 1,
      lastContacted: moment(new Date()).format("MMM DD,y"),
    };
    updateData(() => [...data, formData]);
    updateForm({
      name: "",
      phone: "",
      email: "",
    });
    setIsOpenForm(false);
  };
  return (
    <div className="flex flex-col">
      <Card className="flex flex-col gap-4">
        <div className="flex w-full justify-between gap-2">
          <Button onClick={() => setIsOpenForm(true)}>Create</Button>
          <Button onClick={() => setIsOpenFilter(true)}>Filter</Button>
        </div>
        <div className="flex flex-col">
          <div className="hidden grid-cols-5 text-center sm:grid">
            <div className="col-span-1">ID</div>
            <div className="col-span-1">Name</div>
            <div className="col-span-1">Phone</div>
            <div className="col-span-1">Email</div>
            <div className="col-span-1">Last Contacted</div>
          </div>
          {data.map((_) => (
            <Item key={_.id} data={_} />
          ))}
        </div>
      </Card>
      <Modal
        isOpen={isOpenForm}
        setIsOpen={setIsOpenForm}
        title="Create New Customer"
      >
        <div className="flex w-full flex-col gap-2">
          <Input
            label="Name"
            placeholder="Enter customer name"
            value={form.name}
            onChange={(e: any) =>
              updateForm({
                ...form,
                name: e.target.value,
              })
            }
          />
          <Input
            label="Phone"
            placeholder="Enter customer phone"
            value={form.phone}
            onChange={(e: any) =>
              updateForm({
                ...form,
                phone: e.target.value,
              })
            }
          />
          <Input
            label="Email"
            placeholder="Enter customer email"
            value={form.email}
            onChange={(e: any) =>
              updateForm({
                ...form,
                email: e.target.value,
              })
            }
          />
          <div className="flex flex-col justify-end gap-2 sm:flex-row">
            <Button onClick={() => setIsOpenForm(false)}>Cancel</Button>
            <Button onClick={handleCreateCustomer}>Create</Button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isOpenFilter} setIsOpen={setIsOpenFilter}>
        This is filter
      </Modal>
    </div>
  );
};

const Item = ({ data }: { data: CustomerData }) => {
  return (
    <>
      <div className="hidden grid-cols-5 sm:grid">
        <div className="col-span-1">{data.id}</div>
        <div className="col-span-1">{data.name}</div>
        <div className="col-span-1">{data.phone}</div>
        <div className="col-span-1">{data.email}</div>
        <div className="col-span-1 text-right">{data.lastContacted}</div>
      </div>
      <div className="flex flex-col gap-1 sm:hidden">
        <div className="flex gap-1">
          <div className="">{data.id}</div>
          <div className="">{data.name}</div>
          <div className="col-span-1">{data.phone}</div>
        </div>
        <div className="flex gap-1">
          <div className="col-span-1">{data.email}</div>
        </div>
        <div className="col-span-1 text-right">{data.lastContacted}</div>
      </div>
    </>
  );
};

export default CustomerContainer;
