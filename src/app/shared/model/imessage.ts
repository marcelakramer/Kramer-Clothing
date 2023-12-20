export abstract class IMessage {
    abstract success(message: string): void;
  
    abstract error(message: string): void;
  
    abstract info(message: string): void;
  
    abstract alert(message: string): void;
  
  }
  