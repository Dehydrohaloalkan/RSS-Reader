import { ErrorInfo, useState } from "react"

export const useFetching = (callback: Function) : [() => Promise<void>, Boolean, String] => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}