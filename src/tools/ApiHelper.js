import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (withAuth) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        const fetchData = () => {
            try {
                if (url !== null) {
                    if (withAuth) {
                        axios
                            .get(url, {
                                headers: {
                                    Authorization:
                                        'token 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',
                                },
                            })
                            .then((res) => {
                                setResponse(res.data);
                            });
                    } else {
                        axios.get(url).then((res) => {
                            setResponse(res.data);
                        });
                    }
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { response, error, loading, setUrl };
};
