import { Component } from '@angular/core';
import { ReldistService } from '../reldist.service'; 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-relgraph',
  templateUrl: './relgraph.component.html',
  styleUrls: ['./relgraph.component.css']
})
export class RelgraphComponent {

  	chart =  [];

  	constructor(private _reldist : ReldistService){

  	}

  	ngOnInit(){
	  	this._reldist.getData().subscribe(
	  			res =>{
	  				console.log(res);

	  				let relationships = res['relationships']
	  				let rel_counts = res['rel_counts']

	  				console.log(relationships)
	  				this.chart = new Chart('canvas', {
	  					type: 'pie',
					    data: {
						    datasets: [{
						        data: rel_counts,
						        backgroundColor : [
						          "aqua", "salmon", "darkgray", "pink", "coral"
						        ],
						    }],

						    labels: relationships,
						}
					});
	  			}
	  		)
  	}

}


