import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './404NotFound';

export default function StoryPage() {
  const { storyNumber } = useParams();
  const n = parseInt(storyNumber, 10);

  const TITLES = [
    "Աղվես",
    "Ջուր կուգեր",
    "Բարի լուսո աստղ երևաց",
    "Լորիկ",
    "Ջանիման",
    "Մեր տան իտև",
    "Էպոսի երգ",
    "Խըլբանե",
    "Տընեն էլար",
    "Ճախարակի երգ",
  ];

  if (!Number.isInteger(n) || n < 1 || n > 10) {
    return (
    <NotFound />
    )
  }

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>{TITLES[n - 1]}</h1>
    </div>
  );
}
