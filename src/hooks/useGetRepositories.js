import { useState, useEffect } from "react";

import getRepositories from "../api/getRepositories";

function useGetRepositories() {
    const [status, setStatus] = useState(0);
    const [repo, setRepo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const result = await getRepositories();
            setStatus(result.status);
            setRepo(result.data);
            setIsLoading(false);
        }

        loadData();
    }, []);
    
    return { status, repo, isLoading }
}

export default useGetRepositories;