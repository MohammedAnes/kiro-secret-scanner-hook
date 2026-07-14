# 🔒 Auto Security Scanner — Kiro Hook

A Kiro hook that automatically scans your code for hardcoded secrets every time you save a file. Catches API keys, passwords, tokens, and credentials before they get committed to your repo.

## How It Works

1. You edit and save any source file (`.js`, `.ts`, `.py`, etc.)
2. The hook triggers automatically
3. Kiro scans the file for hardcoded secrets
4. If secrets are found → ⚠️ warns you with details and fix suggestions
5. If clean → ✅ confirms no issues

## What It Catches

- API keys (Stripe, AWS, GitHub, Slack, etc.)
- Hardcoded passwords and database credentials
- Private keys (RSA, SSH)
- Connection strings with embedded credentials
- JWT secrets and Bearer tokens
- Any long random-looking strings assigned to variables

## Project Structure

```
.kiro/
  hooks/
    secret-scanner.json   ← The hook definition
src/
  app.js                  ← Clean example (uses env vars)
  bad-example.js          ← Intentionally bad code for testing
.env.example              ← Template for environment variables
```

## Testing the Hook

1. Open `src/bad-example.js`
2. Make any small edit (add a space, new line, etc.)
3. Save the file
4. Watch Kiro flag all the hardcoded secrets automatically!

## Why This Matters

- Prevents secret leaks to public repos
- Catches mistakes before `git commit`
- Educates developers with fix suggestions
- Zero config — just install and save files
