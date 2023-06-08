import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Transaction } from "../types/transaction";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  performTransaction(transaction: Transaction): Observable<Transaction> {
    // @todo : should make an API call to perform transaction
  }
}
