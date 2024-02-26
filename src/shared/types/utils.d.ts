type WithRequired<T, Fields extends keyof T> = T & { [Property in Fields]-?: T[Property] }

type WithNonNullable<T, Fields extends keyof T> = {
  [Key in keyof T]: Key extends Fields ? NonNullable<T[Key]> : T[Key]
}
