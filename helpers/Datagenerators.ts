import { faker } from "@faker-js/faker";

export function generateFirstName(gender: "male" | "female"): string {
  return faker.person.firstName(gender);
}

export function generateLastName(gender: "male" | "female"): string {
  return faker.person.lastName(gender);
}

export function generateAlphanumeric(count: number): string {
  return faker.string.alphanumeric(count);
}

export function generateNumberOfDigits(numberOfDigits: number): string {
  return faker.string.numeric(numberOfDigits);
}
