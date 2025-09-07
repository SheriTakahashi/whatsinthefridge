"use client";
import React, { useEffect, useState } from "react";
import "./Recipe.css";

type Item = {
  recipeId: number;
  recipeTitle: string;
  foodImageUrl: string;
  recipeUrl: string;
};

const Recipe = () => {
  const [recipes, setRecipes] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID;
    (async () => {
      try {
        const url =
          `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426` +
          `?format=json&categoryId=10&applicationId=${appId}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log("API:", data);
        setRecipes(data.result ?? []);
      } catch (e) {
        console.error("レシピ取得失敗:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>読み込み中…</p>;

  return (
    <div className="recipe-container">
      <h1 className="recommend">おすすめのレシピ</h1>
      <ul className="flex gap-4 overflow-x-auto">
        {recipes.map((r) => (
          <li
            key={r.recipeId}
            className="min-w-[200px]  rounded-lg p-2 bg-white"
          >
            <a
              href={r.recipeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
            >
              <img
                src={r.foodImageUrl}
                alt={r.recipeTitle}
                className="w-full h-32 object-cover rounded"
              />
              <p className="mt-2 text-sm font-bold">{r.recipeTitle}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
