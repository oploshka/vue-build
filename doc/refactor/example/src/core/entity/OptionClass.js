export default class OptionClass {
  #field

  constructor(conferenceObj = {}) {
    this.#field = {
      id              : conferenceObj.id          || null,
      name            : conferenceObj.name        || '',
    };
  }

  getId              () { return this.#field.id;              }
  getName            () { return this.#field.name;            }

  toObject() {
    return Object.assign({}, this.#field);
  }
  // system
  toJSON  () { return this.toObject(); } // JSON.stringify
}
