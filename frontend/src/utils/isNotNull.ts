// Type nullability helper (mainly used in .filter functions)

export const isNotNull = <T> (it: T): it is NonNullable<T> => {
    return it != null;
}