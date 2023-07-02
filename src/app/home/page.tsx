"use client";

import getAllProvinces from "lib/getAllProvinces";
import axios from "axios";
import styles from "./page.module.css";

export default async function Home() {
  const allProvinces: Province[] = await getAllProvinces();
  const categories: Category[] = (
    await axios.get("http://localhost:3000/api/categories")
  ).data;

  const provsList = allProvinces?.map?.((prov) => (
    <option key={prov?.id} value={prov.name}>
      {prov.name}
    </option>
  ));

  const categoriesList = categories?.map?.((cat) => (
    <option key={cat?.id} value={cat.name}>
      {cat.name}
    </option>
  ));

  const submitForm = (e: any) => {
    e.preventDefault();
    const { province, category } = e.target;
    axios.post("http://localhost:3000/api/donate", {
      province: province.value,
      category: category.value,
    }).then(console.log)
  .catch((err) => console.log(err));;
  };

  return (
    <main className="container prose prose-xl flex flex-col mx-auto">
      <form onSubmit={submitForm}>
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
        <button type="submit">ارسال</button>
      </form>
    </main>
  );
}
