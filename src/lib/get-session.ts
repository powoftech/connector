import { auth } from "@/auth";
import { cache } from "react";

/**
 * Cached authentication handler for session management
 *
 * @function auth
 * @description Returns a cached instance of the authentication handler to optimize performance
 * and prevent multiple unnecessary authentications for the same session
 *
 * @returns {Function} Cached authentication middleware function
 * @example
 * // Usage in API route
 * import getSession from "@/lib/get-session";
 *
 * export default function Page() {
 *   const session = await getSession()
 *   // Handle authenticated request
 * }
 */
export default cache(auth);
