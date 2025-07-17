# React + Vite


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# React-supabase
Supabase connection demo app
 - Home screen to Login & Register
 - supabaseClient.js -> Supabase connection configuration
 - supabase.auth.signInWithPassword in Login screen for login with email & password
 - supabase.auth.signUp in Register screen to register with email & password

## Environment Variables Setup

After cloning the repository, create a `.env` file in the project root with the following content:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can copy the template from `.env.example`:

```
cp .env.example .env
```

Replace the values with your actual Supabase project credentials.
