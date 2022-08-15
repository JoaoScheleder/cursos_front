import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('dynamicColumns') dynamicColumns!: string[]
  @Input('columns') columns! : string[]
  @Input('title') title! : string
  @Input('data') data! : any[]
  @Input('Hyperlinked') hyperLinked! : boolean
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(this.data);
  displayedColumns!: string[];

  @Output() delete =  new EventEmitter<number>();
  @Output() edit =  new EventEmitter<Object>();
  @Output() create =  new EventEmitter<Object>();

  ngOnInit(): void {
    this.displayedColumns = this.dynamicColumns.concat('opcoes')
  }
  
  ngOnChanges(){
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createEvent(){
    this.create.emit()
  }

  deleteEvent(codigo : number){
    this.delete.emit(codigo)
  }

  editEvent(object : Object){
    this.edit.emit(object)
  }
}
