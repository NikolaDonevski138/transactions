export class CheckEnteredNumber {
  static isNumberAboveTheLimit(control: any): { [s: string]: boolean } | null {
    if (control.value > 500 || control.value < 1) {
      return { numberIsAboveLimit: true };
    }
    return null;
  }
}
