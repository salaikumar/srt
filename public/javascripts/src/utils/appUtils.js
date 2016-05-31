import PapaParse from 'papaparse';
import AppActions from '../actions/AppActions';
import YearConstants from '../constants/YearConstants';
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
  },
  getMatchperyear(arrayOfYears){
    return(
        YearConstants.years.map((year,index)=>{
        return arrayOfYears[year].matches;
        })
      );
  }
};
