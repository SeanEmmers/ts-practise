// tsconfig.json

// built in types
// implicit strong typing
let lucky = 23;

// explicit strong typing
let lucky3: number;

// opt out of type system
let lucky1: any = 23;

// default is any
let lucky2;

// create your own types
type Style = string;
let font: Style;

// strong typing objects
interface Person {
  first: string;
  last: string;
  // key increased flexibilty while still enforcing first and last name
  [key: string]: any
}

const person: Person = {
  first: 'Sean',
  last: 'Phillips'
}

const person2: Person = {
  first: 'Julia',
  last: 'Wirth',
  annoying: true
}


