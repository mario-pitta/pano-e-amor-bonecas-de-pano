import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]

})
export class LayoutModule { }
