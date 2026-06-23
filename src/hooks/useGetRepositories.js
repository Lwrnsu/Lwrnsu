import { useState, useEffect } from "react";

import getRepositories from "../api/getRepositories";

function useGetRepositories() {
    const [status, setStatus] = useState(0);
    const [repo, setRepo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadData() {
            try {
                const result = await getRepositories();
                setStatus(result.status);
                setRepo(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);
    
    return { status, repo, isLoading, error }
}

export default useGetRepositories;