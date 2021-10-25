import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FinderComponent } from "./finder/finder.component";

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    FinderComponent
  ],
  exports: [
    FinderComponent
  ]
})
export class ComponentModule {}
