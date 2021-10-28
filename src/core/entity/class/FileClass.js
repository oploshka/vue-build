// import ParentClass from "@service/class/ParentClass";

export default class FileClass {
  #field

  constructor(fileObj = {}) {
    // super();
    this.#field = {
      id  : fileObj.id  || '',
      src : fileObj.src || '',
      file: fileObj.file || {},
    };
  }

  getId  () { return this.#field.id   ; }
  getSrc () { return this.#field.src  ; }
  getFile() { return this.#field.file ; }

  setSrc (src ) { return this.#field.src  = src ; }
  setFile(file) { return this.#field.file = file; }


  toString() {
    return this.#field.src;
  }

  toObject() {
    return Object.assign({}, this.#field);
  }
  // system
  toJSON  () { return this.toObject(); } // JSON.stringify
}
