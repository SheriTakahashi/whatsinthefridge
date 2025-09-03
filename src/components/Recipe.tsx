"use client";

import React, { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // 適当なAPI（チキン料理を検索する例）
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("レシピ取得失敗:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p>読み込み中…</p>;
  }

  return (
    <div className="recipe-container">
      <h1 className="recommend">おすすめのレシピ</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <div className="list-row">
              <p className="recipe-name">{recipe.strMeal}</p>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={100}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
