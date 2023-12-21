Hello 👋

We appreciate your interest to contribute to this project, as much as we are happy to have your first contribution merged, please
kindly be patient and read this contributing guide.

## About the project

Nexus App (App name will be updated soon) makes it easy for students to get access to Academic materials and a lot more, in one app. Basically for now, we are focused in aggregating and organizing lecture resources for students.

## The stacks for the Frontend

We are using a combo of Next.js, Typescript and Tailwindcss.

Note: We are using the App directory.

Don't worry if you are a frontend developer but never worked with Next.js, Tailwind or Typescript before, you can learn on the go by reading about them, picking a simple issue to solve and be open for feedback as our maintainers are here to give help you grow.

## Understand the folder structure

If you want to fix any issue regarding the ui, hooks, state etc, just go to the respective folder, open the affected file and go on.

Here is the structure you need to understand.

```
| src 
———— app
  |———— layout.tsx
  |———— page.tsx
  |———— (Auth)
     |——— layout.tsx
     |——— page.tsx
     |——— Login
        |—— page.tsx
     |——— Register
        | —— page.tsx
  
———— components
  |——— Button
     |—— button.tsx
     
———— ui
    |—— Avatar.tsx
    
———— pages
    | —— Homepage
    | ——— About
    
| hooks
   |——— useLocation.ts
   
| states
   |——— useAuth.ts
```

If you don't understand the structure here, check the code and try to open all folders to check which and what file is inside.

## Making a contribution

Now is the time to start making an impact with us 🔥 

If you just want to request a feature or report a bug, please create an issue and we will check it out.

Your PR will be considered only if the issue is assigned to you, so ensure you show interest to fix an issue first

If you want to contribute by writing code, kindly check the issues, pick the one you want to fix and check this guide to make a contribution:

### Step 1 🍴🍴

• Fork and clone the repo or run this in your terminal by running 

`git clone https://github.com/NexusOAU/frontend-material.git`

### Step 2 📂📂

• cd into the project folder: 

`cd frontend-material`

### Step 3 📥📥

• Install packages and dependencies by running 

`pnpm install`

Note: We are using `pnpm` because it is faster and saves space than yarn and npm.

if you have not used it before, you have to install it globally by running `npm i -g pnpm` or you can check this [official installation guide](https://pnpm.io/installation)

### Step 4 🏃‍♀️🏃‍♀️

• Run the project with `pnpm dev`

### Step 5 🌿🌿

• Checkout to your branch by running 

`git checkout -b [branch-name]`

** It is recommended to use your name/username as branch name, e.g `john-doe`

### Step 6 👨‍💻👨‍💻

• Write your code and commit it. The following are good and accepted commit messages:

---- `Fix: I fix something bug`<br/>

---- `Feat: I added a feature`<br/>

---- `Refactor: I change nested if-else to switch case`<br/>

--- `Chore: I do something else`

#### Please do not write code to fix or integrate what is not part of the issues.

Pick an issue to solve, if there's no issue for what you want to do, create an issue for it but don't start writing code, and once approved, you can go on.

### Step 7 🏒🏒

• Push to your branch 

`git push origin [branch-name]`

** Always pull from the `main` branch before pushing. Please ensure you are up-to-date with that branch to avoid conflict. **

### Step 8 🧎‍♂️🧎‍♂️

• Send a pull request to the `develop` branch.

Then in the Pull request comment section, reference or link to the issue you solved, and show us a screenshot of video of how you solve it.

To reference to an issue, just type # and issue numbers will pop up, click on the issue number you've solve.

This will make the approval process faster.

Note: don't push to the `main branch` or force push to the `develop` branch.

#### Pull from `main`, push to `develop`

You pull request will be automatically closed if it has conflict, but don't worry, feedback will be given and you can try to work on it again.

### Step 9 ✋️✋️

• Finally, wait for feedback. At least 2 people have to review your code for approval.

If you need any help understanding this guide, please create an issue and we'll discuss it there.

Thanks for your interest once again, and we can't wait to have you ship with us 😀

---------------------------------
