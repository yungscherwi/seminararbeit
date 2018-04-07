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

  getWeeklyDataMonday(){
    return this.storage.get('weeklyTodos').then(result => {
      if(result){
        result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
        let mondayItems = [];
        for (var i = 0; i < result.length; i++){
        //  console.log(result[i]['day']);
          if(result[i].day == 'Montag'){
          mondayItems.push(result[i]);
          }
        }
        console.log(mondayItems);
        return(mondayItems);
      }

    });
  }

    getWeeklyDataTuesday(){
      return this.storage.get('weeklyTodos').then(result => {
        if(result){
          result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
          let tuesdayItems = [];
          for (var i = 0; i < result.length; i++){
          //  console.log(result[i]['day']);
            if(result[i].day == 'Dienstag'){
            tuesdayItems.push(result[i]);
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
            let wednesdayItems = [];
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i].day == 'Mittwoch'){
              wednesdayItems.push(result[i]);
              }
            }
            return(wednesdayItems);
          }

        });
      }

      getWeeklyDataThursday(){
        return this.storage.get('weeklyTodos').then(result => {
          if(result){
            result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
            let thursdayItems = [];
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i].day == 'Donnerstag'){
              thursdayItems.push(result[i]);
              }
            }
            return(thursdayItems);
          }

        });
      }

      getWeeklyDataFriday(){
        return this.storage.get('weeklyTodos').then(result => {
          if(result){
            result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
            let fridayItems = [];
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i].day == 'Freitag'){
              fridayItems.push(result[i]);
              }
            }
            return(fridayItems);
          }

        });
      }

      getWeeklyDataSaturday(){
        return this.storage.get('weeklyTodos').then(result => {
          if(result){
            result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
            let saturdayItems = [];
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i].day == 'Samstag'){
              saturdayItems.push(result[i]);
              }
            }
            return(saturdayItems);
          }

        });
      }

      getWeeklyDataSunday(){
        return this.storage.get('weeklyTodos').then(result => {
          if(result){
            result= JSON.parse(result); //Um String aus Storage wieder in JS-Objekt umzuwandeln
            let sundayItems = [];
            for (var i = 0; i < result.length; i++){
            //  console.log(result[i]['day']);
              if(result[i].day == 'Sonntag'){
              sundayItems.push(result[i]);
              }
            }
            return(sundayItems);
          }

        });
      }




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
