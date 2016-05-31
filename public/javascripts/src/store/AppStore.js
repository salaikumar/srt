import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import appUtils from '../utils/appUtils';
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _sachinData = "";
var AppStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        console.log('emitter');
        this.emit(CHANGE_EVENT);
    },
    parseSachinData(sachinData){
      _sachinData = sachinData;
    },
    getSachinData(){
      console.log('called');
      return _sachinData;
    }
    /*saveContact(contacts){
        _contacts.push(contacts);
        console.log('_contacts',_contacts);
    },
    getContacts(){
        return _contacts;
    },
    receiveContacts(contacts){
        _contacts = contacts;
    },
    removeContact(contactId){
        var index = _contacts.findIndex(x => x.id === contactId);
        _contacts.splice(index,1);
    },
    editContact(editContact){
        _contact_to_edit = editContact;
    },
    getContactToEdit(){
        return _contact_to_edit;
    },
    updateContact(updateContact){
        for(var i=0;i<_contacts.length;i++){
            if(_contacts[i].id == updateContact.id){
                _contacts.splice(i,1);
                _contacts.push(updateContact);
            }
        }
    }*/

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.GET_SACHIN_DATA:
            console.log('Getting sachin data...');

            AppStore.parseSachinData(action.sachinData);

            AppStore.emit(CHANGE_EVENT);
            break;
        /*case AppConstants.RECEIVE_CONTACT:
            console.log('Receiving Contact...');

            //store save
            AppStore.receiveContacts(action.contacts);

            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.REMOVE_CONTACT:
            console.log('Remove Contact...');

            //store save
            AppStore.removeContact(action.contactId);

            appApi.removeContact(action.contactId);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.EDIT_CONTACT:
            console.log('Editing Contact...');

            //store save
            AppStore.editContact(action.editContact);

            //appApi.removeContact(action.contactId);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.UPDATE_CONTACT:
            console.log('Updating Contact...');

            //store save
            AppStore.updateContact(action.updateContact);

            appApi.updateContact(action.updateContact);
            //EmitChange
            AppStore.emit(CHANGE_EVENT);
            break;*/
    }
    return true;
});

module.exports = AppStore;
