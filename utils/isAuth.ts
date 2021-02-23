export const isAuth = (): boolean => {
  if (typeof window === "undefined") return false;

  const cookies = document.cookie;

  const authCookies = cookies
    .split(";")
    .some(
      (cookie) =>
        cookie.trim().startsWith("refresh-token") ||
        cookie.trim().startsWith("access-token")
    );

  if (authCookies) return true;
  else return false;
};
