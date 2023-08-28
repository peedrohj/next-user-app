"use server";

import User from "../db/models/user.model";
import { connectToDb } from "../db/mongoose";

interface createUserParams {
  name: string;
  email: string;
  password: string;
}

export async function createUser({
  name,
  email,
  password,
}: createUserParams) {
  connectToDb();

  try {
    await User.create(
      {
        name,
        email,
        password,
      },
    );
  } catch (error: any) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
}
