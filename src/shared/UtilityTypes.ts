export type MapToUnion<T> = T extends { [K: string]: infer I } ? I : never;
