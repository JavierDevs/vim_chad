# vim_chad:
Is a discord bot dedicated to the [vim](https://www.vim.org/) text editor.

# How to use:
  To start the bot, run download the modules that you need! You can do so by running this command!    
  ```
  npm i
  ```
  If this project has the modules outdated in the `package.json` folder, you can run the following to update them!
  ```
  npm update
  ```
  Go to the `config.json` file and add the items such as the prefix and owner ID!     
  Since the index.js reads the token via the `.env` file, you need to create a .env file and put in the following:
  ```
  token = TOKEN_HERE
  ```
  
  Once you are done, you can run the bot!
  
  # Bash Users
  
  As you can see I have created a bash script that installs [nvm](https://github.com/nvm-sh/nvm) and all the dependcies you need! Note that you should be running this after putting stuff in your `config.json` and your `.env` file!
  ```
  bash startup.sh
  ```
