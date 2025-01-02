"use client";
import { SignIn, useSignIn, useUser } from "@clerk/nextjs";
import { BookMark } from "lucide-react";
import { saveTranslations } from "../actions/save-translations";
export default function SaveBtn(sourceLan, targetLan, sourceText, targetText) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signIn } = useSignIn();
  return (
    <button type="button">
      <BookMark
        onClick={() =>
          saveTranslations("en", "es", "Hello, world", "Hola mundo!")
        }
      />
    </button>
  );
}
