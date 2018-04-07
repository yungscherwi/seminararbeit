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
            if (result[i].title == item.title && result[i].description == item.description) {
                result.splice(i,1);
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
            if (result[i].title == weeklyItem.title && result[i].description == weeklyItem.description && result[i].day == weeklyItem.day) {
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
