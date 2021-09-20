export async function fetchCount(data = 1): Promise<{ data: number }> {
    const response = await fetch('/api/counter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    });
    const result = (await response.json()) as { data: number };

    return result;
}
