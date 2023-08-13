"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalButton from "../../components/PaypalButton";
import { Province, Category } from "types.d";
import {
  Paypal,
  PROVINCES_EP,
  CATEGORIES_EP,
} from "../../constants/apiConstants.js";

export default function Home() {
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(5);

  useEffect(() => {
    axios.get(PROVINCES_EP).then((res) => setProvinces(res.data));
    axios.get(CATEGORIES_EP).then((res) => setCategories(res.data));
  }, []);

  const provincesList = provinces?.map((prov: Province) => (
    <option key={prov?.id} value={prov.name}>
      {prov.label}
    </option>
  ));

  const getCategories = (p: string) => {
    axios
      .get(CATEGORIES_EP + "?prov=" + p)
      .then((res) => setCategories(res.data));
  };

  const categoriesList = categories.map((cat: Category) => (
    <option key={cat?.id} value={cat.name}>
      {cat.label}
    </option>
  ));

  const handleAmount = (e) => {
    e.preventDefault();
    if (+e.target.value === 0) setAmount(1);
    setAmount(+e.target.value);
  };

  return (
    <main className="container prose prose-xl flex flex-col gap-3 mx-auto mt-6">
      <h3> پرداخت سریع</h3>
      <form className="flex gap-2">
        <label className="flex flex-col">
          فهرست استان ها
          <select
            className={styles.select}
            name="province"
            onChange={(e) => getCategories(e.target.value)}
          >
            {provincesList}
          </select>
        </label>
        <label className="flex flex-col">
          گزینه ها
          <select className={styles.select} name="category">
            {categoriesList}
          </select>
        </label>
        <label className="flex flex-col">
          مبلغ
          <input
            className={styles.input}
            type="number"
            value={amount}
            onChange={handleAmount}
          />
        </label>
        <div className="paypal flex items-center width-fit mx-4">
          <PayPalScriptProvider
            options={{
              clientId: Paypal.CLIENT_ID,
              components: "buttons",
              currency: "CAD",
            }}
          >
            <PaypalButton amount={amount} currency="CAD" />
          </PayPalScriptProvider>
        </div>
      </form>
    </main>
  );
}
