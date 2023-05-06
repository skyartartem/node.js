const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
} = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "remove":
      const delContact = await removeContact(id);
      return console.log(delContact);
    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);
    case "updateById":
      const updateContact = await updateById(id, { name, email, phone });
      return console.log(updateContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// Приклад викликів функціі
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "remove", id: "TExn-bqJrzIxwur2poPQV" });
// invokeAction({ action: "add", name: "Mr. Anderson", email: "mr.anderson@mail.com", phone: "0632814042" });
// invokeAction({
//   action: "updateById",
//   id: "TExn-bqJrzIxwur2poPQV",
//   name: "Mr. Anderson",
//   email: "mr.anderson@mail.com",
//   phone: "052346825",
// });

