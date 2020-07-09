import { Component,OnInit, ViewChild, } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatTable, } from '@angular/material';
import { AddCurrencyComponent } from './Addcurrency.component';



export interface currencyModel {
  id:number,
  CountryName: string;
  CurrencyName:string;
  AlphabeticCode:string;
  NumricCode: number;

  Status: string;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'InterViewDemo';
  CountryCurrency:any[]=[
    {"id":1,"CountryName":"United Arab Emirates","CurrencyName":"Dirham","AlphabeticCode":"AED","NumricCode":856,"Status":"Active"},
    {"id":2,"CountryName":"Afghan","CurrencyName":"Afghanis","AlphabeticCode":"AFN","NumricCode":721,"Status":"InActive"},
    {"id":3,"CountryName":"Algeria","CurrencyName":"Alzera","AlphabeticCode":"DZL","NumricCode":214,"Status":"InActive"},
     {"id":4,"CountryName":"Bermuda","CurrencyName":"Barem","AlphabeticCode":"BMD","NumricCode":640,"Status":"Active"},
     {"id":5,"CountryName":"China","CurrencyName":"Yen","AlphabeticCode":"CNA","NumricCode":420,"Status":"Active"},
     {"id":6,"CountryName":"Dominica","CurrencyName":"Den","AlphabeticCode":"DMC","NumricCode":890,"Status":"Active"},
     {"id":7,"CountryName":"Estonia","CurrencyName":"Eyan","AlphabeticCode":"EEE","NumricCode":223,"Status":"Active"},
     {"id":8,"CountryName":"France","CurrencyName":"Euro","AlphabeticCode":"FRN","NumricCode":176,"Status":"Active"},
     {"id":9,"CountryName":"Georgia","CurrencyName":"Gree","AlphabeticCode":"GRE","NumricCode":350,"Status":"InActive"},
     {"id":10,"CountryName":"Honduras","CurrencyName":"Euro","AlphabeticCode":"HND","NumricCode":940,"Status":"InActive"},
     {"id":11,"CountryName":"Japan","CurrencyName":"Yen","AlphabeticCode":"JPN","NumricCode":230,"Status":"InActive"},
     {"id":12,"CountryName":"Jersey","CurrencyName":"Yen","AlphabeticCode":"JER","NumricCode":423,"Status":"Active"},
     {"id":13,"CountryName":"Kuwait","CurrencyName":"Dinar","AlphabeticCode":"KWT","NumricCode":555,"Status":"Active"}
  ];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  displayedColumns: string[] = ['id', 'CountryName','CurrencyName','AlphabeticCode','NumricCode','Status','edit','delete'];

 constructor(public dialog: MatDialog)
  {

 }

dataSource = new MatTableDataSource<currencyModel>(this.CountryCurrency);


 openDialog(action,obj) {





  obj.action = action;

  const dialogRef = this.dialog.open(AddCurrencyComponent, {
    width: '350px',

    data:obj
  });



  dialogRef.afterClosed().subscribe(result => {

    if(result.event == 'Add'){
     this.addRowData(result.data);

    }else if(result.event == 'Update'){
      this.updateRowData(result.data);
    }else if(result.event == 'Delete'){
      this.deleteRowData(result.data);

    }
  });



}

addRowData(data){


  var d = this.CountryCurrency.length+1;
   this.CountryCurrency.push({
    "id":d,
    "CountryName":data.CountryName,
    "CurrencyName":data.CurrencyName,
    "AlphabeticCode":data.AlphabeticCode,
    "NumricCode":data.NumricCode,
    "Status":data.Status

   }


   );
   this.dataSource.data=this.CountryCurrency;


}
updateRowData(data)
{





  var foundIndex = this.CountryCurrency.findIndex(x => x.id == data.id);
  this.CountryCurrency[foundIndex] = data;
  this.dataSource.data=this.CountryCurrency;








}
deleteRowData(row_obj)
{

  var foundIndex = this.CountryCurrency.findIndex(x => x.id == row_obj.id);
  this.CountryCurrency.splice(foundIndex, 1);

  this.dataSource.data=this.CountryCurrency;


}

  ngOnInit()
{

}
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
search(event):void
{

this.dataSource.filter =  event.target.value.trim().toLocaleLowerCase();
}


}


