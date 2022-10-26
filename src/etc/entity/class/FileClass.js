// import ParentClass from "@service/class/ParentClass";

const FileClass = function (option = {}) {
  
  let _field = {
    id  : '',
    src : '',
    file: {},
  };
  
  const init = (option = {}) => {
    _field.id   = option.id   || '';
    _field.src  = option.src  || '';
    _field.file = option.file || {};
  };
  
  init(option);
  
  this.getId   = ()     => { return _field.id   ; };
  this.getSrc  = ()     => { return _field.src  ; };
  this.getFile = ()     => { return _field.file ; };
  this.setSrc  = (src ) => { return _field.src  = src ; };
  this.setFile = (file) => { return _field.file = file; };
  
  
  this.toString = () => {
    return _field.src;
  };
  this.toObject = () => {
    return Object.assign({}, _field);
  };
  this.toJSON  = () => { return this.toObject(); }; // JSON.stringify
};

export default FileClass;
