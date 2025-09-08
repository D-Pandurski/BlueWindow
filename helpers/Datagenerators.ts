import { faker } from "@faker-js/faker";
/* 
  Generates random female or male first name using the faker library. 
  Input "male" or "female" as a function argument to determine the name's gender.
*/
export function generateFirstName(gender: "male" | "female"): string {
  return faker.person.firstName(gender);
}

/* 
  Generates random female or male last name using the faker library. 
  Input "male" or "female" as a function argument to determine the name's gender.
*/
export function generateLastName(gender: "male" | "female"): string {
  return faker.person.lastName(gender);
}

/* 
  Generates random alphanumeric value using the faker library. 
  Input a numeric value as a function argument to determine the length of the generated string.
*/
export function generateAlphanumeric(count: number): string {
  return faker.string.alphanumeric(count);
}

/* 
  Generates random numeric value using the faker library. Returns the generated value as a string.
  Input a numeric value as a function argument to determine the length of the generated string.
*/
export function generateNumberOfDigits(numberOfDigits: number): string {
  return faker.string.numeric(numberOfDigits);
}
