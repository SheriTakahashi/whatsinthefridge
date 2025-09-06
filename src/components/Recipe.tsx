"use client";

import React, { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const appId = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID;
        const res = await fetch(
          `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=large&applicationId=${appId}`
        );

        const data = await res.json();
        console.log("APIレスポンス:", data);
        setRecipes(data.result || []);
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
          <li key={recipe.recipeId}>
            <div className="list-row">
              <p className="recipe-name">{recipe.recipeTitle}</p>
              <img
                src={recipe.foodImageUrl}
                alt={recipe.recipeTitle}
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
