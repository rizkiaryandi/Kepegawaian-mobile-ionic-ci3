import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPegawaiComponent } from './edit-pegawai.component';

describe('EditPegawaiComponent', () => {
  let component: EditPegawaiComponent;
  let fixture: ComponentFixture<EditPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPegawaiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
