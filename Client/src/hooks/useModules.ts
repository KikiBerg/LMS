import { useState, useEffect } from "react";
import { getModulesReq } from "../utils";
import { IModule } from "../utils";

export function useModules(courseId: number) {
    const [modules, setModules] = useState<IModule[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        async function fetchModules() {
            try {
                const fetchedModules = await getModulesReq(courseId);
                setModules(fetchedModules);
                setLoading(false);
            } catch (err) {
                setError (`Failed to fetch modules for course ${courseId}. Please try again.`);
                setLoading(false);
            }
        }

        fetchModules();
    }, [courseId]);

    return { modules, loading, error };
}