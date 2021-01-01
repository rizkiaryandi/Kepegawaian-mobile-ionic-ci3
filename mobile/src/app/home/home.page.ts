import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { TambahPegawaiComponent } from '../modal/tambah-pegawai/tambah-pegawai.component';
import { EditPegawaiComponent } from '../modal/edit-pegawai/edit-pegawai.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataPegawai: any;
  jumlahPegawai:any;

  ngOnInit(){
    this.pegawaiGet();
  }

  pegawaiGet(){
    this.http.get(this.linkApi).subscribe(data=>{
      console.log(data);
      this.dataPegawai = data;
      this.jumlahPegawai = this.dataPegawai.length;
    });
  }
  @ViewChild('feature', {static:false}) feature;
  linkApi = "http://localhost/rest_kepegawaian/index.php/api/kepegawaian";
  constructor(public http:HttpClient, public modalController: ModalController) {}

  homeModel = {
    featureSegment:"0"
  }
  homeStyle = {
    'profile':{
      opacity:1
    },
    'header':{
      display:'none'
    },
    'bodyContainer':{
      top: '165px',
      height: 'calc(100vh - 165px)'
    },
    'bodyContainerB':{
      'margin-top': '98px',
      'border-radius': '35px 35px 0px 0px'
    }
  }

  slidesOptions={
    slidesPerView : 1.5
  }

  scrollY(ev){
    this.homeStyle.profile.opacity = 1-(ev.srcElement.scrollTop/120);
    if(ev.srcElement.scrollTop <= 10){
      this.homeStyle.bodyContainer = {
        top: '165px',
        height: 'calc(100vh - 165px)'
      };
      this.homeStyle.bodyContainerB = {
        'margin-top': '98px',
        'border-radius': '35px 35px 0px 0px'
      };
    }else{
      this.homeStyle.bodyContainer = {
        top: '0vh',
        height: '100vh'
      };
      this.homeStyle.bodyContainerB['margin-top'] = '263px';
    }
  }
  
  featureChange(){
    this.feature.slideTo(parseInt(this.homeModel.featureSegment));
  }

  async presentTambah() {
    const modal = await this.modalController.create({
      component: TambahPegawaiComponent,
      cssClass: 'modal-y',
      swipeToClose: true,
      mode:"ios"
    });
    modal.onDidDismiss().then(()=>{
      this.pegawaiGet();
    });
    return await modal.present();
  }

  async presentEdit(id=0) {
    console.log(id)
    const modal = await this.modalController.create({
      component: EditPegawaiComponent,
      cssClass: 'modal-y',
      swipeToClose: true,
      componentProps:{
        pegawai_id:id
      },
      mode:"ios"
    });
    modal.onDidDismiss().then(()=>{
      this.pegawaiGet();
    });
    return await modal.present();

    
  }

  deletePegawai(id=0) {
    this.http.delete(this.linkApi+"?pegawai_id="+id).subscribe(data=>{
      this.pegawaiGet();
    });
    
  }
}
