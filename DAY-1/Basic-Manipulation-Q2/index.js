const fs = require("fs");
const path = require("path");

// Get the operation and arguments from the command line
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

// Helper function to handle errors
const handleError = (err) => {
  if (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
};

// Switch case to handle the file operations
switch (operation) {
  case "read":
    if (!file) {
      console.log("Please provide a file name to read.");
      break;
    }
    fs.readFile(file, "utf8", (err, data) => {
      handleError(err);
      console.log(data);
    });
    break;

  case "create":
    if (!file) {
      console.log("Please provide a file name to create.");
      break;
    }
    fs.writeFile(file, "", (err) => {
      handleError(err);
      console.log(`File '${file}' created`);
    });
    break;

  case "append":
    if (!file || !content) {
      console.log("Please provide a file name and content to append.");
      break;
    }
    fs.appendFile(file, `\n${content}`, (err) => {
      handleError(err);
      console.log(`Content appended to the file '${file}'`);
    });
    break;

  case "delete":
    if (!file) {
      console.log("Please provide a file name to delete.");
      break;
    }
    fs.unlink(file, (err) => {
      handleError(err);
      console.log(`File '${file}' deleted`);
    });
    break;

  case "rename":
    const newFile = content;
    if (!file || !newFile) {
      console.log("Please provide the current and new file name to rename.");
      break;
    }
    fs.rename(file, newFile, (err) => {
      handleError(err);
      console.log(`File '${file}' renamed to '${newFile}'`);
    });
    break;

  case "list":
    fs.readdir(".", (err, files) => {
      handleError(err);
      console.log("Files and directories in current directory:");
      files.forEach((file) => {
        console.log(file);
      });
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
