import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahPegawaiComponent } from './tambah-pegawai.component';

describe('TambahPegawaiComponent', () => {
  let component: TambahPegawaiComponent;
  let fixture: ComponentFixture<TambahPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahPegawaiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
