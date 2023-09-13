import { useState } from "react";
import { registerOneUser } from "../../api";

const useRegister = () => {
    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const toRegister = async (data) => {
        const user = await registerOneUser("users", data)
        if(user.error) {
            setError(true)
        } else {
            setCreated(true)
        }   
    }

    return { toRegister, created, error };
}

export { useRegister };