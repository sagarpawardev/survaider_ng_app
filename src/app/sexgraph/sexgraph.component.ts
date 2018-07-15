import { Component } from '@angular/core';
import { SexdistService } from '../sexdist.service'; 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sexgraph',
  templateUrl: './sexgraph.component.html',
  styleUrls: ['./sexgraph.component.css']
})
export class SexgraphComponent {

  chart =  [];

  	constructor(private _sexdist : SexdistService){

  	}

  	ngOnInit(){
	  	this._sexdist.getData().subscribe(
	  			res =>{
	  				console.log(res);

	  				let temp_countries = res['countries']
	  				let temp_fcount = res['female_count']
	  				let temp_mcount = res['male_count']

	  				console.log(temp_countries)
	  				this.chart = new Chart('canvas', {
	  					type: 'bar',
					    data: {
				      	labels: temp_countries,
				      	datasets: [
					        {
					          label: "Number of Males",
					          backgroundColor: "#3e95cd",
					          data: temp_mcount
					        }, {
					          label: "Number of Females",
					          backgroundColor: "#F06292",
					          data: temp_fcount
					        }
					      ]
					    },
					    options: {
					      title: {
					        display: true,
					        text: 'Population growth (millions)'
					      }
					    }
					});
					
	  			}
	  		)
  	}

}

