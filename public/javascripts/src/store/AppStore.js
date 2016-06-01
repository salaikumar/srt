import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';
import appUtils from '../utils/appUtils';
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _sachinData = "",
    _awards = "";
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
    },
    receiveAwards(awards){
      _awards = awards;
    },
    getAwards(){
      return _awards;
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.GET_SACHIN_DATA:
            console.log('Getting sachin data...');

            AppStore.parseSachinData(action.sachinData);

            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.GET_AWARDS:
            AppStore.receiveAwards(action.awards);
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
