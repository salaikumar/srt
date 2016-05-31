var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
var AppActions = {
    parseSachinData(data){
      AppDispatcher.handleViewActions({
        actionType: AppConstants.GET_SACHIN_DATA,
        sachinData : data
      });
    }
  }
module.exports = AppActions;
