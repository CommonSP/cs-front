import {Component, OnInit} from '@angular/core';
import {AdministrationService} from "../../services/administration.service";
import {IProduct} from "../../../../../models/product";
import {FormControl, FormGroup} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";
import {debounce, debounceTime, delay, filter} from "rxjs";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
	selector: 'app-add-product-modal',
	templateUrl: './add-product-modal.component.html',
	styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

	constructor(private administrationService: AdministrationService, private dialog: MatDialogRef<AddProductModalComponent>) {
	}

	product: IProduct[] = []
	addingForm: FormGroup = new FormGroup<any>({
		article: new FormControl()
	})


	ngOnInit(): void {
		this.addingForm.get('article')?.valueChanges.pipe(debounceTime(1000), filter(text=>text.length>0)).subscribe(artile=>{
			this.getProduct(artile)
			console.log(artile)
		})

	}

	getProduct(article: string) {
		this.administrationService.searchProductByArticle(article).subscribe(res => {
			this.product = res
			console.log(res)
		})
	}

	add(){
		this.dialog.close(this.product[0])
	}

	close(){
		this.dialog.close(null)
	}
}
