import { Component } from '@angular/core';
import { ActionSheetController, ActionSheetButton } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private actionSheetController: ActionSheetController,) {
  }

  actionSheetButtonsBen: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Like',
      icon:'heart-outline',
      data: {
        action:'like',
      },
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      data: {
        action: 'cancel',
      },
    },
  ];

  actionSheetButtonsErwin: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Like',
      icon:'heart-outline',
      data: {
        action:'like',
      },
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      data: {
        action: 'cancel',
      },
    },
  ];

  actionSheetButtonsRaffy: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Like',
      icon:'heart-outline',
      data: {
        action:'like',
      },
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      data: {
        action: 'cancel',
      },
    },
  ];

  actionSheetButtonsRamon: ActionSheetButton[] = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Like',
      icon:'heart-outline',
      data: {
        action:'like',
      },
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      data: {
        action: 'cancel',
      },
    },
  ];

}
