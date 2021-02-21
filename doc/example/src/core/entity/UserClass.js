export default class UserClass {
  #field

  constructor(obj = {}) {
    this.#field = {
      id              : obj.id          || null,
      name            : obj.name        || '',
      surname         : obj.surname     || '',
      file            : obj.file        || new FileClass(),
    };
  }

  getId  () { return this.#field.id;    }
  getName() { return this.#field.name;  }
  getSurname() { return this.#field.surname;  }

  getFullName() {
    return `${this.#field.name} ${this.#field.surname}`;
  }

  getFile() { return this.#field.file ; }

  // setId              (id  ) { return this.#field.id              = id;              }
  // setName            (name) { return this.#field.name            = name;            }
  setFile(file) { return this.#field.file = file; }
}
