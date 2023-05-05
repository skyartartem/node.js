const fs = require("fs/promises");
const fileOperation = async () => {
  const buffer = await fs.readFile("./db/contacts.json", "utf-8");
  // другий аргумент "utf-8" Перетворюэ з бинару на стринг або:
  // const data = buffer.toString();
  /// Перетворюэ з бынару на об'ект
  // const data = JSON.parse(buffer);

  return JSON.parse(buffer);
};
/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

const cont = {
  fileOperation,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = cont;
