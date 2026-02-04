Author: Jerome Gabriel Cala
Application Name: JeromeFolio

Purpose: 
A portfolio website I have made to showcase my abilities and things about me I would love the world to know.

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended) - **npm comes bundled with Node.js**
- A terminal/command prompt

### Installing Node.js (Windows)

If you don't have Node.js installed:

1. **Download Node.js:**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard (accept defaults)
   - Make sure "Add to PATH" is checked during installation
   - Restart your terminal/IDE after installation

3. **Verify installation:**
   Open a new terminal and run:
   ```bash
   node --version
   npm --version
   ```
   Both commands should display version numbers.

**Troubleshooting:**

**If `npm` command is not found but `node` works:**
- npm comes bundled with Node.js, so if Node.js works, npm should too
- **Solution:** Close and reopen your terminal/IDE (this refreshes the PATH environment variable)
- If that doesn't work, manually add Node.js to PATH in this session:
  ```powershell
  $env:Path += ";C:\Program Files\nodejs"
  ```
- Then verify: `npm --version`

**If you get "running scripts is disabled on this system" error in PowerShell:**
- This is a PowerShell execution policy issue
- **Quick fix:** Use `npm.cmd` instead of `npm` (e.g., `npm.cmd install`)
- **Permanent fix:** Run PowerShell as Administrator and execute:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```
- Or simply close and reopen your terminal - the policy may already be set correctly

### Using Bash Instead of PowerShell

**Option 1: Git Bash (Recommended - Easiest)**
- If you have Git installed, Git Bash should already be available
- In VS Code/Cursor: Click the dropdown next to the terminal icon (bottom right) → Select "Git Bash"
- Or open Git Bash directly from Windows Start menu

**Option 2: Windows Terminal with WSL**
- Install WSL (Windows Subsystem for Linux) from Microsoft Store
- Then use Ubuntu or another Linux distribution

**Option 3: Change Default Terminal in VS Code/Cursor**
- Press `Ctrl + ,` to open Settings
- Search for "terminal integrated default profile"
- Select "Git Bash" or "WSL" as default

### Installation

1. Navigate to the project directory in your terminal
2. Install all dependencies:
   ```bash
   npm install
   ```

This will install all required packages including:
- React & React DOM
- React Scripts (Create React App)
- React Icons
- Testing libraries
- Web Vitals

### Running on Localhost

To start the development server:
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`. The page will reload automatically when you make changes.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (⚠️ irreversible)

### AutoBiography:
This project is so tedious LOL.


Update:
So I have done a manual deploy on this website when it was originally made before. No errors. However, I have started
working on this project again and I wanted to do a github deploy because that would help me constantly update
this website without worrying about having to manually deploy it everytime. Howvever, the issue with that was
that netlify (the website im using to deploy) is that it treats warnings as errors, so I had to repeatedly fix 
the warnings one by one. 

Update#2:
Github deployation works now.