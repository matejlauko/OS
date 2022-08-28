type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P]
}

type RecursivePartialIndexed<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartialIndexed<U>[]
    : T[P] extends object
    ? RecursivePartialIndexed<T[P]>
    : T[P]
} & { [K: string]: any }
