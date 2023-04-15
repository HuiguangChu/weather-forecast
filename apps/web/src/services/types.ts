export type RouteParams<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
};
