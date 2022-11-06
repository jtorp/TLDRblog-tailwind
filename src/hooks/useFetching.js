import { useState, useEffect } from "react";
import axios from 'axios';


const useFetching = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true)
            try {
                const resp = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setData(resp.data)
                    setFetchError(null)
                }
            } catch (error) {
                if (isMounted) {
                    setFetchError(error.message)
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false)
            }
        }
        fetchData(dataUrl);

        return () => {
            isMounted = false;
            source.cancel();

        }

    }, [dataUrl]);

    return { data, fetchError, isLoading }
};

export default useFetching

