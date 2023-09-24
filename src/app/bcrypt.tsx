import { hashSync, compareSync } from "bcrypt-ts";

export function hashPassword(password: string) {
  return hashSync(password, 10);
}

export function comparePassword(password, hashedPassword) {
  return compareSync(password, hashedPassword);
}