import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage){

  }
//********************* Heutige Aktivitäten ******************************
  getData() {
    return this.storage.get('todos');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

  delete(item){
    return this.getData().then(result => {
      if (result) {
        result = JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
        for (var i = 0; i < result.length; i++) {
            // Vergleicht jeweiligen Stellen des multidimensionalen Arrays
            if (result[i][0] == item[0] && result[i][1] == item[1] && result[i][2] == item[2] && result[i][3] == item[3]) {
                console.log(result)
                result.splice(i,1);
                console.log(result);
                let newResult = JSON.stringify(result);
                this.storage.set('todos', newResult);
                return;
            }
          }
        }
    });
  }

//********************* Wöchentliche Aktivitäten ******************************

  getWeeklyData() {
    return this.storage.get('weeklyTodos');
  }
/* Not working as intended
  getWeeklyDataMonday(){
    return this.storage.get('weeklyTodos').then(result => {
      if(result){
        result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
        for (var i = 0; i < result.length; i++){
        //  console.log(result[i]['day']);
          if(result[i]['day'] == 'Montag'){
          let mondayItems = result[i];
          }
        }
        return(mondayItems);
      }

    });
  }

    getWeeklyDataTuesday(){
      return this.storage.get('weeklyTodos').then(result => {
        if(result){
          result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
          for (var i = 0; i < result.length; i++){
          //  console.log(result[i]['day']);
            if(result[i]['day'] == 'Dienstag'){
            let tuesdayItems = result[i];
            }
          }
          return(tuesdayItems);
        }

      });
    }

      getWeeklyDataWednesday(){
        return this.storage.get('weeklyTodos').then(result => {
          if(result){
            result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i]['day'] == 'Mittwoch'){
              let wednesdayItems = result[i];
              }
            }
            return(wednesdayItems);
          }

        });
      }
 */



  saveWeekly(data){
    let newData = JSON.stringify(data);
    this.storage.set('weeklyTodos', newData);
  }

  deleteWeekly(weeklyItem){
    return this.getWeeklyData().then(result => {
      if (result) {
        result = JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
        for (var i = 0; i < result.length; i++) {
            // Vergleicht die jeweiligen Stellen des multidimensionalen Arrays
            if (result[i][0] == weeklyItem[0] && result[i][1] == weeklyItem[1] && result[i][2] == weeklyItem[2] && result[i][3] == weeklyItem[3] && result[i][4] == weeklyItem[4]) {
                result.splice(i,1);
                let newResult = JSON.stringify(result);
                this.storage.set('weeklyTodos', newResult);
                return;
            }
          }
        }
    });
  }

}
