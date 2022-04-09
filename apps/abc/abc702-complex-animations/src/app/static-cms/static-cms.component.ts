import {
  AnimationBuilder,
  AnimationPlayer,
  animate,
  style
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export const shrinkText = [
  style({ 'font-size': '45px' }),
  animate(
    '{{animationSpeed}}ms',
    style({ 'font-size': '{{size}}px' })
  )
];

@Component({
  selector: 'static-cms-component',
  templateUrl: './static-cms.component.html',
  styleUrls: ['./static-cms.component.scss']
})
export class CmsStaticComponent {
  @ViewChild('sampleText') elementRef: ElementRef | undefined;
  private player: AnimationPlayer | undefined;

  sizeAndSpeed = new FormGroup({
    animationSpeed: new FormControl(500),
    size: new FormControl(12)
  });

  constructor(private animationBuilder: AnimationBuilder) {}

  reanimate() {
    if (this.player) {
      this.player.destroy();
    }

    this.player = this.animationBuilder
      .build(shrinkText)
      .create(this.elementRef?.nativeElement, {
        params: this.sizeAndSpeed.value
      });

    this.player.play();
  }
}
