import axios from "axios";
import { useEffect, useState } from "react";

export const CustomUseFetch = ({ url }) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const res = await axios.get(url);
            setResponse(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        getData();
    }, [url]);

    return { response, error, loading };
};
