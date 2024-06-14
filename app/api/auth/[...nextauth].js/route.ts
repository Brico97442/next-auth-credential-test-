import NextAuth from "next-auth" 
import { authOptions } from "@/lib/authOptionS"

const handler = NextAuth(authOptions)
export {handler as GET ,handler as POST}