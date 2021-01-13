export interface Book {
  bookId: number;
  totalPurchasedByLibrary: number;
  title: string;
  isbn: string;
  dateOfPublication: Date;
  isAvailable?: boolean;
  isCheckedOut?: boolean;
}
