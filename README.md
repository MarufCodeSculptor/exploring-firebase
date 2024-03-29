# google firebase google login 

## Initial Installation

1. **Visit:** [console.firebase.google.com](https://console.firebase.google.com)
2. **Create Project:** (Skip Google Analytics)
3. **Register App:** (Create config)
4. **Install Firebase:** `npm install firebase`
5. **Add Config File:** Add the Firebase config file to your project.
6. **DANGER:** Do not publish or make Firebase config public by pushing to GitHub.

## Integration

7. **Visit:** Go to Docs > Build > Authentication > Web > Get Started
8. **Export App:** From the `firebase.config.js` file, export the default app.
9. **Login.jsx:** Import `getAuth` from `firebase/auth`.
10. **Create Authentication Object:** `const auth = getAuth(app)`

## Provider Setup

11. **Import Google Auth Provider:** Create a new provider.
12. **Use signInWithPopUp:** Pass authentication and provider.
13. **Activate Sign-In Method:** (Google, Facebook, GitHub, etc.)
14. **[Vite]:** Change `127.0.0.1` to `localhost`.

## More Auth Provider

1. **Activate the Auth Provider:** Create app, provide redirect URL, client ID, client secret.
2. *(Additional steps if necessary)*

