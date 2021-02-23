import { useEffect } from "react";
import Router from "next/router";

export const useIsAuth = (redirectTo: string): boolean => {
  if (typeof window === "undefined") return false;

  const cookies = document.cookie;

  const isUserAuth = cookies
    .split(";")
    .some(
      (cookie) =>
        cookie.trim().startsWith("refresh-token") ||
        cookie.trim().startsWith("access-token")
    );

  useEffect(() => {
    if (!isUserAuth) {
      Router.push(redirectTo);
    }
  }, []);

  return isUserAuth;
};
