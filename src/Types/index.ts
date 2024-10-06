import type { WAMessageUpdate, WAProto } from "@jlucaso/baileys";

export interface SendMessageTypes {
  to: string | number;
  text?: string;
  sessionId: string;
  isGroup?: boolean;
  answering?: WAProto.WebMessageInfo;
}

export interface SendMediaTypes extends SendMessageTypes {
  media?: string | Buffer;
}
export interface SendTypingTypes extends SendMessageTypes {
  duration: number;
}
export interface SendReadTypes {
  sessionId: string;
  key: WAProto.MessageKey;
}

export interface MessageReceived extends WAProto.WebMessageInfo {
  /**
   * Your Session ID
   */
  sessionId: string;

  /**
   * @param path save image location path with extension
   * @example "./myimage.jpg"
   */
  saveImage: (path: string) => Promise<void>;
  /**
   * @param path save video location path with extension
   * @example "./myvideo.mp4"
   */
  saveVideo: (path: string) => Promise<void>;
  /**
   * @param path save image location path without extension
   * @example "./mydocument"
   */
  saveDocument: (path: string) => Promise<void>;
}

export interface StartSessionParams {
  /**
   * Print QR Code into Terminal
   */
  printQR: boolean;
}

export interface StartSessionWithPairingCodeParams {
  /**
   * Phone Number with Country Code
   */
  phoneNumber: string;
}

export type MessageUpdated = WAMessageUpdate & {
  sessionId: string;
  messageStatus:
    | "error"
    | "pending"
    | "server"
    | "delivered"
    | "read"
    | "played";
};
