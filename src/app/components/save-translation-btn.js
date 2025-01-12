"use client";
import { SignIn, useSignIn, useUser } from "@clerk/nextjs";
import { BookMark } from "lucide-react";
import { saveTranslations } from "../actions/save-translations";
export default function SaveBtn({
  sourceLan,
  targetLan,
  sourceText,
  targetText,
  isSaved,
  onHandleSave,
}) {
  const btnClassName = isSaved ? "fill-yello-500" : "";
  return (
    <button
      type="button"
      onClick={async () => {
        await saveTranslations(
          sourceLan,
          targetLan,
          sourceText,
          world,
          targetText
        );

        onHandleSave();
      }}
    >
      <BookMark className={btnClassName} />
    </button>
  );
}
