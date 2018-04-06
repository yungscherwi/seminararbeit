import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage){

  }

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
            // Vergleicht beide Stellen des multidimensionalen Arrays
            if (result[i][0] == item[0] && result[i][1] == item[1]) {
                result.splice(i,1);
                let newResult = JSON.stringify(result);
                this.storage.set('todos', newResult);
            }
          }
        }
    });
  }

  getWeeklyData() {
    return this.storage.get('weeklyTodos');
  }

  saveWeekly(data){
    let newData = JSON.stringify(data);
    this.storage.set('weeklyTodos', newData);
  }

}
