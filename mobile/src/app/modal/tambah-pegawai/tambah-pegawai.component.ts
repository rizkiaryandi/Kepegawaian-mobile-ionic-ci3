import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tambah-pegawai',
  templateUrl: './tambah-pegawai.component.html',
  styleUrls: ['./tambah-pegawai.component.scss'],
})
export class TambahPegawaiComponent implements OnInit {

  constructor(public http:HttpClient, public modalController:ModalController) { }
  linkApi = "http://localhost/rest_kepegawaian/index.php/api/kepegawaian";

  pegawai_nama;
  pegawai_nik;
  pegawai_tanggal_lahir ;
  pegawai_jenis_kelamin;
  ngOnInit() {}

  pegawaiPost(){
    this.http.post(this.linkApi, {
      'pegawai_nama': this.pegawai_nama,
      'pegawai_nik': this.pegawai_nik,
      'pegawai_jenis_kelamin': this.pegawai_jenis_kelamin,
      'pegawai_tanggal_lahir': this.pegawai_tanggal_lahir,
    }).subscribe(data=>{
      console.log(data);
    });
    this.modalController.dismiss();
  }

  setNama(value) {
    this.pegawai_nama = value;
  }

  setNik(value) {
    this.pegawai_nik = value;
  }

  setTgl(value) {
    this.pegawai_tanggal_lahir = value;
  }

  setJk(value) {
    this.pegawai_jenis_kelamin = value;
  }

}
