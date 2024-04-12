import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarTopicoComponent } from '../criar-topico/criar-topico.component';


describe('CriaTopicoComponent', () => {
  let component: CriaTopicoComponent;
  let fixture: ComponentFixture<CriaTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTopicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
