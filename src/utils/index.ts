function debounce<F extends (...args: any[]) => void>(func: F, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: Parameters<F>) {
        clearTimeout(timeoutId!);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


export { debounce }