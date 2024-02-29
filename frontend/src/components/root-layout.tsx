import { Outlet } from "react-router-dom";
import { getAuth } from "../lib/utils";

export async function loader() {
    const isLoggedIn = getAuth();
    console.log({ isLoggedIn });
    return null;
}

export const RootLayout = () => {
    return (
        <main className="w-full h-full flex items-center justify-center">
            <Outlet />
        </main>
    );
};
