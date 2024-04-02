export class MessageDto {
  isUser;
  content;

  constructor(isUser, content) {
    this.isUser = isUser;
    this.content = content;
  }
}
