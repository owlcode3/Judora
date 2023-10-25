import * as prismic from "@prismicio/client";

export const client = prismic.createClient(import.meta.env.VITE_REPO_NAME, {
   // If your repository is private, add an access token
   accessToken: "",

   // This defines how you will structure URL paths in your project.
   // Update the types to match the custom types in your project, and edit
   // the paths to match the routing in your project.
   //
   // If you are not using a router in your project, you can change this
   // to an empty array or remove the option entirely.
   routes: [
      {
         type: "home-page",
         path: "/"
      }
      //  {
      //     type: "about-us",
      //     path: "/about-us"
      //  },
      //  {
      //     type: "services",
      //     path: "/services"
      //  }
   ]
});
