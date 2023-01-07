(global as any).handler = handler;

export function handler() {
  Logger.log(new Date());
}
