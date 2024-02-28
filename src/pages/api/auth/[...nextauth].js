import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
const userController =  require('../../../controllers/userController');
export const authOptions = {
  // Configure one or more authentication providers
  secret: "process.env.AUTH_SECRET",
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Email", type: "email", placeholder: "admin@truecollab.com" },
          password: { label: "Password", type:"password", placeholder: "admin123" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
         var user = { id: "1", name: "Nikhil Ram", email: "admin@truecollab.com" }

         //var user = await userController.validateUser(credentials);
          console.log(credentials);
          if (credentials.email == "admin@truecollab.com"){
            user = true;
          }
          //return
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      }),
    GitHubProvider({
        clientId: "Iv1.fd797cd55594facf",
        clientSecret: "f2c4bf39e8f4ffe5b64145bd1f489e3f642f0764"
    }),
    AzureADProvider({
      clientId: "4f8744d4-e493-4b43-b58a-2bd6e121e434",
      clientSecret: "l1M8Q~dznHjIRhwZVCbuUihPZvMzuO.-Tcd4fctz",
      tenantId: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    }),
    // ...add more providers here
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    // async jwt({ token }) {
    //   token.userRole = "admin"
    //   return token
    // },
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
}
export default NextAuth(authOptions)