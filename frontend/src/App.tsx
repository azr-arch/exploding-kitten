import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./components/root-layout";
import { Game } from "./containers/game";
import { UsernameModal } from "./components/username-modal";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Game />} />

                {/* For Auth */}
                <Route
                    path="/new"
                    element={
                        <div className="w-full h-full flex items-center justify-center">
                            <UsernameModal />
                        </div>
                    }
                />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
