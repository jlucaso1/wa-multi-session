import { WAProto } from "@jlucaso/baileys";
import { MessageUpdated } from "../Types";

export const parseMessageStatusCodeToReadable = (
  code: WAProto.WebMessageInfoStatus
): MessageUpdated["messageStatus"] => {
  if (code == WAProto.WebMessageInfoStatus.PENDING) return "pending";
  if (code == WAProto.WebMessageInfoStatus.SERVER_ACK) return "server";
  if (code == WAProto.WebMessageInfoStatus.DELIVERY_ACK) return "delivered";
  if (code == WAProto.WebMessageInfoStatus.READ) return "read";
  if (code == WAProto.WebMessageInfoStatus.PLAYED) return "played";

  return "error";
};
