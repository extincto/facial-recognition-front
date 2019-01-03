import { Component, OnInit, ViewChild } from '@angular/core';
import { Itools } from 'src/app/models/ITools';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToolService } from 'src/app/services/tools/tool.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  toolList: Itools[] = [];
  tools: string[] = ['Mousqueton', 'Gants intervention', 'Brassard de sécurité', 'porte menottes', 'Bandeau agent de sécurité cynophile',
'Talkies walkies', 'Lampe torche', 'kit oreillette', 'Tasers', 'Bombes lacrymogènes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private toolService: ToolService) { }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    this.toolService.tools().subscribe((data) => {
      this.toolList.push(data);
    });
  }

}
