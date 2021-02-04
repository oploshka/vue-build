// import ParentClass from "@services/class/ParentClass";

export default class FileClass {
  #field

  constructor(fileObj = {}) {
    // super();

    this.#field = {
      src : fileObj.src || '',
      file: fileObj.file || {},
    };
  }

  getSrc () { return this.#field.src  ; }
  getFile() { return this.#field.file ; }

  setSrc (src ) { return this.#field.src  = src ; }
  setFile(file) { return this.#field.file = file; }

  toObject() {
    return Object.assign({}, this.#field);
  }
  // system
  toJSON  () { return this.toObject(); } // JSON.stringify
}
