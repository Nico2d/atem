import { useEffect } from "react";
import Router from "next/router";

export const useIsAuth = (
  redirectTo?: string,
  redirectIfNotFound?: string
): boolean => {
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
    if (isUserAuth && redirectTo) Router.push(redirectTo);
    else if (!isUserAuth && redirectIfNotFound) Router.push(redirectIfNotFound);
  }, []);

  return isUserAuth;
};
