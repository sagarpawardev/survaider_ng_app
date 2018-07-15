import { Component } from '@angular/core';
import { FulldataService } from '../fulldata.service'; 
import { Chart } from 'chart.js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-fulldata',
  templateUrl: './fulldata.component.html',
  styleUrls: [
  	'./fulldata.component.css',
  	'./fulldata.component.scss',
  ]
})
export class FulldataComponent {

	countries = []
	fcount = []
	fnlwgts = []
	educations = []
	education_nums = []
	marital_statuses = []
	occupations = []
	relationships = []
	races = []
	sexes = []
	capital_gains = []
	capital_losses = []
	hours_per_weeks = []
	ages = []
	salaries = []

	private req_limit = environment.req_limit;
	private prev_size = 0

	private destroying = false

	constructor(private _fulldata : FulldataService){

	}

  	ngOnInit() {
  		this._fulldata.resetFlag()
  		console.log('Inside Init');
  		this.req_limit = environment.req_limit;
		this.prev_size = 0
		this.destroying = false

		this.countries = []
		this.fcount = []
		this.fnlwgts = []
		this.educations = []
		this.education_nums = []
		this.marital_statuses = []
		this.occupations = []
		this.relationships = []
		this.races = []
		this.sexes = []
		this.capital_gains = []
		this.capital_losses = []
		this.hours_per_weeks = []
		this.ages = []
		this.salaries = []

  		this.fetchData();
  	}

  	ngOnDestroy(){
  		console.log('SGR Distroying')
  		this.destroying = true
  	}

  	ngDoCheck(){
  		console.log('Inside ngDoCheck()');
  	}

  	ngAfterContentInit(){
  		console.log('Inside ngAfterContentInit()')
  	}

  	ngAfterViewInit(){
  		console.log('ngAfterViewInit')
  	}

  	ngAfterViewChecked()	{
  		console.log('ngAfterViewChecked')
  	}


  	fetchData(){
  		this._fulldata.getData().subscribe(
	  			res =>{
	  				console.log(res);

	  				this.ages = this.ages.concat(res['ages'])
	  				this.fcount = this.fcount.concat(res['work_classes'])
	  				this.fnlwgts = this.fnlwgts.concat(res['fnlwgts'])
	  				this.educations = this.educations.concat(res['educations'])
	  				this.education_nums = this.education_nums.concat(res['education_nums'])
	  				this.marital_statuses = this.marital_statuses.concat(res['marital_statuses'])
	  				this.occupations = this.occupations.concat(res['occupations'])
	  				this.relationships = this.relationships.concat(res['relationships'])
	  				this.races = this.races.concat(res['races'])
	  				this.sexes = this.sexes.concat(res['sexes'])
	  				this.capital_gains = this.capital_gains.concat(res['capital_gains'])
	  				this.capital_losses = this.capital_losses.concat(res['capital_losses'])
	  				this.hours_per_weeks = this.hours_per_weeks.concat(res['hours_per_weeks'])
	  				this.countries = this.countries.concat(res['native_countries'])
	  				this.salaries = this.salaries.concat(res['salaries'])

	  				console.log(this.countries)
	  				if(this.prev_size != this.countries.length){
	  					this.prev_size = this.countries.length
	  					if(!this.destroying){
	  						this.fetchData()
	  					}
	  					
	  				}

	  			}
	  		)
  	}

  	filter(id, col_idx){

  		var input, filter, table, tr, td, i;
		input = document.getElementById(id);
	  	filter = input.value.toUpperCase();
		table = document.getElementById("myTable");
	  	tr = table.getElementsByTagName("tr");
	  	for (i = 0; i < tr.length; i++) {
	    	td = tr[i].getElementsByTagName("td")[col_idx];
	    	if (td) {
	      		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        		tr[i].style.display = "";
	      		} else {
	        	tr[i].style.display = "none";
	      		}
	    	}       
  		}
  	}

}


