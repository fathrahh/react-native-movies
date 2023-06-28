export type FlattenType<T extends object> = T[keyof T] extends object
  ? FlattenType<T[keyof T]>
  : T[keyof T];
