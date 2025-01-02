"use server";
import { auth } from "@clerk/nextjs/dist/types/server";
import { neon } from "@neondatabase/serverless";
export async function saveTranslations(
  sourceLan,
  targetLan,
  sourceText,
  translateText
) {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`
  INSERT INTO translation (
    user_id,
    source_language,
    target_language,
    source_text,
    translateText
  )VALUES (
    ${userId},
    ${sourceLan},
    ${targetLan},
    ${sourceText},
    ${translateText}
  )`;
}
