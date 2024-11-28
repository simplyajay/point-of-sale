import "@/globals.css";
import Providers from "./providers";
import ProtectedLayout from "@/components/Layout/ProtectedLayout";
import Navbar from "@/components/Navbar/Navbar";
import { cookies, headers } from "next/headers";
import { getFetchOptions } from "@/utils/api-request/fetchOptions";
import { getAuthenticatedUser } from "@/services/validation";

export const metadata = {
  title: "Point of Sale System",
  description: "Generated by create next app",
};

const getAuth = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(process.env.NEXT_PUBLIC_TOKEN);
  if (token) {
    const fetchOptions = getFetchOptions("GET", null, false, true, token.value);
    const user = await getAuthenticatedUser(fetchOptions);
    return user;
  }

  return null;
};

const RootLayout = async ({ children }) => {
  const currentPath = headers().get("currentPath") || "/";
  const publicPaths = ["/", "/register"];

  const user = await getAuth();
  const initialState = { authentication: { user } };

  return (
    <Providers initialState={initialState}>
      <html lang="en">
        <body className="antialiased w-screen h-screen m-0 p-0 flex flex-col">
          <Navbar />
          <main className="flex flex-1 ">
            {user && !publicPaths.includes(currentPath) ? (
              <ProtectedLayout> {children}</ProtectedLayout>
            ) : (
              <>{children}</>
            )}
          </main>
          <footer></footer>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
