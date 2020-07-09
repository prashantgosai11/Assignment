import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators,ReactiveFormsModule, } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'AddCurrency-dialog',
  templateUrl: './AddCurrency.html',
  styleUrls: ['./AddCurrency.component.css'],
  providers: [AppService]
})
export class AddCurrencyComponent implements OnInit{
  dialogTitle:any='Add Currency';

  CurrencyForm: FormGroup;
  countries: any[];
  filteredOptions: Observable<string[]>;
  id: FormControl;
  countryname = new FormControl();


  currency: FormControl;
  alphabaticcode: FormControl;
  numriccode: FormControl;
  status: FormControl;
  action:string;
  local_data:any;


countrynames:any=[];
  constructor(private services:AppService,
    public dialogRef: MatDialogRef<AddCurrencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ) {

      this.local_data = {...data};
      console.log(this.local_data.CurrencyName);
      this.action = this.local_data.action;
      this.id=this.local_data.length+1;


    }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  createFormControls() {
    this.id=new FormControl();
    this.countryname = new FormControl("", Validators.required);


    this.currency = new FormControl("", Validators.required);
    this.alphabaticcode = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern("[a-zA-Z ]+")
    ]);
    this.numriccode = new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(4),
      Validators.pattern("[0-9]*")
    ]);
    this.status=new FormControl("", Validators.required);

  }


  ngOnInit()
  {


    this.createFormControls();
    this.createCurrencyForm();
    this.services.getcurrency().subscribe(data=>this.countrynames=data.map(x=>x.name));

      this.filteredOptions = this.countryname.valueChanges
      .pipe(startWith(''),
        map(value => this._filter(value))
      );



  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countrynames.filter(option => option.toLowerCase().includes(filterValue));
  }
  createCurrencyForm()
    {
       this.CurrencyForm= new FormGroup({
        id:this.id,
        CountryName      : this.countryname,

          CurrencyName    :  this.currency,

            AlphabeticCode   : this.alphabaticcode,
            NumricCode : this.numriccode,
            Status:this.status


        });
    }
    onSubmit() {

      if (this.CurrencyForm.invalid)
      {
        return;
      }
      else
      {
        let Upercase=this.CurrencyForm.get('AlphabeticCode').value;

        this.CurrencyForm.patchValue({ AlphabeticCode:Upercase.toUpperCase()})



          this.dialogRef.close({event:this.action,data:this.CurrencyForm.value});


        this.CurrencyForm.reset();
      }
    }



    closeDialog(){
      this.dialogRef.close({event:'Cancel'});
    }

}
