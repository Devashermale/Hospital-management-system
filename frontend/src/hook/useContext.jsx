import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}

export default useAuthContext;