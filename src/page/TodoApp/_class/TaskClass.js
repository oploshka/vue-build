import Vue from "vue";

const TaskClass = function (params) {

    let _field = Vue.observable({
        id: null,
        title: null,
        completed: false
    });

    const init = (params) => {
        _field.id = params.id,
        _field.title = params.title
        _field.completed = params.completed || false
    };

    init(params)

    this.getId      = () => { return _field.id; }
    this.getTitle   = () => { return _field.title; }
    this.getStatus  = () => { return _field.completed; }

    this.setId      = (val) => { _field.id = val; }
    this.setTitle   = (val) => { _field.title = val; }

    this.setStatus  = (val) => {
        if (typeof val === 'boolean' || val instanceof Boolean) {
            _field.completed = val;
        } else {
            console.error('[ERROR]: Trying to set invalid task status!');
            return;
        }
    }

    this.toObject = () => {
        return Object.assign({ _class: 'TaskClass' }, _field);
    };
    // system
    this.toJSON = () => { return this.toObject(); }; // JSON.stringify

}

export default TaskClass