import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-pegawai',
  templateUrl: './edit-pegawai.component.html',
  styleUrls: ['./edit-pegawai.component.scss'],
})
export class EditPegawaiComponent implements OnInit {

  pegawai_id;
  constructor(public http:HttpClient, public modalController:ModalController) { }
  linkApi = "http://localhost/rest_kepegawaian/index.php/api/kepegawaian";

  pgw;
  pegawai_nama:any;
  ngOnInit() {
    this.http.get(this.linkApi+'?pegawai_id='+this.pegawai_id).subscribe(data=>{
      this.pgw = data;
      this.pegawai_nama = this.pgw[0].pegawai_nama;
    });
  }

  pegawaiPost(){
    this.http.put(this.linkApi, {
      'pegawai_id':this.pegawai_id,
      'pegawai_nama': this.pegawai_nama
    }).subscribe(data=>{
      console.log(data);
    });
    this.modalController.dismiss();
  }

  setNama(value) {
    this.pegawai_nama = value;
  }

}
