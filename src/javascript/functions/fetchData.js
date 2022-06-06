"use strict";

export default async function fetchData() {
  const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
  const response = await fetch(url);
  const data = await response.json();
  return data.challenges;
}