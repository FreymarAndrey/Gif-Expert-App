import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["messi"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push('valorant');
    setCategories([newCategory, ...categories]);
    // setCategories( cat => [ ..cat, 'Valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
