export class BinaryStack {
  private stack: string[] = [];
  private code = "0123456789abcdefghijklmnopqrstuvwxyz";
  /**
   * Push a number to the stack and converts it if a second argument is provided
   * @param integer [base=10]
   * @param base to convert to from 2 to 36
   */
  public push(integer: number, base: number = 10) {
    if (base < 2 || base > 36 || !Number.isInteger(base)) throw new Error("Base must be an integer between 2 and 36");
    if (integer < 0 || !Number.isInteger(integer)) throw new Error("Number must be a positive integer");
    let num = integer;
    let codeBase = this.code.slice(0, base);
    let text = "";
    const j = Math.ceil(Math.log(num) / Math.log(codeBase.length));
    for (let i = 0; i < j; i++) {
      text = codeBase.charAt(num % codeBase.length) + text;
      num /= codeBase.length;
    }
    this.stack.push(text);
  }
  public pop() {
    return this.stack.pop();
  }
  public size() {
    return this.stack.length;
  }
  public clear() {
    this.stack = [];
  }
  public show() {
    return this.stack;
  }
}
