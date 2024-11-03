import Providers from "./providers";
import "@/globals.css";
import AuthLayout from "@/components/Layout/AuthLayout";
export const metadata = {
  title: "Point of Sale System",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AuthLayout> {children}</AuthLayout>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
