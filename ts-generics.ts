// Generics
// use a type inside a class or function

// the T represents a variable type you can pass it to strong type the observables internal value
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);