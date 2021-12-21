export const sendMessage = (newMessageBody: string) =>
  ({ type: 'DIALOGS/SEND_MESSAGE', newMessageBody } as const);
