"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./page.module.css";
import {
    PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import PaypalButton from '../components/PaypalButton'

export default function Home() {
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(5);

  useEffect(() => {
    axios.get("http://localhost:3000/api/provinces").then((res) => setProvinces(res.data));
    axios.get("http://localhost:3000/api/categories").then((res) => setCategories(res.data));
  }, []);

  const provsList = provinces.map((prov) => (
    <option key={prov?.id} value={prov.name}>
      {prov.name}
    </option>
  ));

  const categoriesList = categories.map((cat) => (
    <option key={cat?.id} value={cat.name}>
      {cat.name}
    </option>
  ));

  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(+e.target.value);
  };

  return (
    <main className="container prose prose-xl flex flex-col mx-auto">
      <form className="flex flex-col gap-2">
        <label className="flex flex-col">
          فهرست استان ها
          <select className={styles.select} name="province">
            {provsList}
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
      </form>
      <div className="flex width-fit">
        <PayPalScriptProvider
          options={{
            clientId: "AVx2R2yLOYcWXt3HIouQsmL-fL36bwB-TP7qcQqyZtU03_-HJ8kI39EaL9EX9f9JIpv2V-ROQoZmh_Hx",
            components: "buttons",
            currency: "CAD",
          }}
        >
          <PaypalButton amount={amount} currency="CAD" />
        </PayPalScriptProvider>
      </div>
    </main>
  );
}
