"use server";

import { cookies } from "next/headers";

export async function setCookies(value: string) {
  cookies().set("session", value, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 1,
    path: "/",
  });
}
