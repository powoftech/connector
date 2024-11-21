import "next-auth";
import { AdapterUser } from "next-auth/adapters";

// Reference from Prisma schema to Auth.js session
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
      profile: {
        customURL: string;
        role: string;
      };
    };
  }
}

