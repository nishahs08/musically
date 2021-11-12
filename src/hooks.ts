import { useState, useEffect } from 'react';

export function useDebouce<T>(value: T, timeout: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedValue(value), timeout);
		return () => {
			clearTimeout(handler);
		};
	}, [value, timeout]);

	return debouncedValue;
}
