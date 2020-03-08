export const getIndent = (
    size: string | number,
): string => typeof size === 'string' ? size : ' '.repeat(size);
