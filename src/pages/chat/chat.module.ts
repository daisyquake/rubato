import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chat } from './chat';
import { ChatService } from '../../app/shared/chat-service';
import { RelativeTime } from "../../app/shared/relative-time";
import { EmojiPickerComponentModule } from "../../app/emoji-picker/emoji-picker.module";
import { EmojiProvider } from "../../app/shared/emoji";

@NgModule({
  declarations: [
    Chat,
    RelativeTime
  ],
  imports: [
    EmojiPickerComponentModule,
    IonicPageModule.forChild(Chat),
  ],
  exports: [
    Chat
  ],
  providers: [
    ChatService,
    EmojiProvider
  ]
})
export class ChatModule {
}
