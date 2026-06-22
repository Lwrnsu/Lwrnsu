import { Octokit } from "octokit";

const apiKey = import.meta.env.VITE_GITHUB_API_KEY; 
const octokit = new Octokit({
    auth: `${apiKey}`
});

async function getRepositories() {
    try {
        const fetchApi = await octokit.request('GET /users/{username}/repos', {
            username: "Lwrnsu"
        });
        return fetchApi;
    } catch (err) {
        throw new Error(err.message, { cause: err });
    }
} 

export default getRepositories;