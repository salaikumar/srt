import PapaParse from 'papaparse';
import AppActions from '../actions/AppActions';
var sachinData = "";
module.exports = {
  readFile(){
    PapaParse.parse('http://localhost:3000/data/sachin.csv',{
      download:true,
      header:true,
      complete: function(results){
        sachinData =  results;
        AppActions.parseSachinData(sachinData);
        console.log('utils',sachinData);
      }
    });
    return sachinData;
  }
};
