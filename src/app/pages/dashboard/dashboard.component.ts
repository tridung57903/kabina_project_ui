import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { max } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tBu:Array<any>  
  tFloor:Array<any>  

  public barChartOptionsBU = {};
  public barChartOptionsFloor = {};

  public barChartLabelsBU = [];
  public barChartLabelsFloor = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];//[pluginDataLabels];

  public barChartDataBU = [];
  public barChartDataFloor = [];


  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.generateReportShelves().subscribe((data : any) => { 
      this.generateData(data);
    });
    Observable
    .interval(14400*1000)
    .timeInterval()
    .flatMap(() => this.adminService.generateReportShelves())
    .subscribe((data : any) => {
      this.generateData(data);
    });
  }

  generateData(data){
      let floorReport = data.FloorReport;
      let businessUnitReport = data.BusinessUnitReport;
      let lablesFloor: Array<string>=[];
      let floorAvai: Array<number>=[];
      let floorBook: Array<number>=[];
      let buAvai: Array<number>=[];
      let buBook: Array<number>=[];
      let lablesBusinessUnit: Array<string>=[];

      var floorDataSets : any[] = [];
      var buDataSets : any[] = [];
      var tBu : any[] = [];
      var tFloor : any[] = [];

      for (let entryf of floorReport) {
          var inforf = {
            name: 'Floor ' + entryf.floorNumber,
            availables: entryf.available,
            booked: entryf.booked,
            percentage: entryf.booked*100/(entryf.booked+entryf.available)  
          };
          tFloor.push(inforf);
          lablesFloor.push('Floor '+ entryf.floorNumber);
          floorBook.push(entryf.booked);
          floorAvai.push(entryf.available);
      }
      this.tFloor = tFloor;
      floorDataSets[0] = {
          data : floorBook,
          label: 'Booked'
      }
      floorDataSets[1] = {
          data : floorAvai,
          label : 'Available'
      }

      for (let entryb of businessUnitReport) {
          var inforb = {
            name: entryb.name,
            availables: entryb.available,
            booked: entryb.booked,
            percentage: entryb.booked*100/(entryb.booked+entryb.available)  
          };
          tBu.push(inforb);
          lablesBusinessUnit.push(entryb.name);
          buBook.push(entryb.booked);
          buAvai.push(entryb.available);
      }
      this.tBu = tBu;
      buDataSets[0] = { 
          data : buBook,
          label : 'Booked'
      }
      buDataSets[1] = { 
          data : buAvai,
          label : 'Available'
      }

      var maxBu = Math.max(...buAvai) +  Math.max(...buBook); 
      var maxFl = Math.max(...floorAvai) +  Math.max(...floorBook); 

      var ChartOptionsBU = {
        responsive: true,
        scales: { xAxes: [{}], yAxes: [{ticks:{max:maxBu,userCallback: function(label, index, labels) {
          if (Math.floor(label) === label) {
              return label;
          }
      }}}] },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
          }
        }
      };
      this.barChartOptionsBU = ChartOptionsBU;
      var ChartOptionsFloor = {
        responsive: true,
        scales: { xAxes: [{}], yAxes: [{ticks:{max:maxFl,userCallback: function(label, index, labels) {
          if (Math.floor(label) === label) {
              return label;
          }
      }}}] },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
          }
        }
      };
      this.barChartOptionsFloor = ChartOptionsFloor;
      this.barChartLabelsBU = lablesBusinessUnit;
      this.barChartDataBU = buDataSets;
      this.barChartLabelsFloor = lablesFloor;
      this.barChartDataFloor = floorDataSets;
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
