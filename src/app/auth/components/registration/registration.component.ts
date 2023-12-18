import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { ToastrService } from 'ngx-toastr'
import { Route, Router } from '@angular/router'
import {MatDialog} from "@angular/material/dialog";
import {AgreementComponent} from "../agreement/agreement.component";

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

	constructor(private authService: AuthService,
				private toastrService: ToastrService,
				private router: Router,
				private dialog: MatDialog) {
	}
	approve = true

	registrationForm: FormGroup = new FormGroup({
		fio: new FormControl(null),
		phone: new FormControl(null),
		email: new FormControl(null),
		company: new FormControl(null),
		inn: new FormControl(null),
		typeTrade: new FormControl(null),
		products: new FormControl(null),
		message: new FormControl(null),
		approve: new FormControl(false, Validators.requiredTrue),
	})

	ngOnInit(): void {
	}

	registration() {
		this.authService.registrationNewClient(this.registrationForm.value).subscribe(
			res => {
				this.toastrService.success('Ваши данные приняты в обработку. В скором времени с вами свяжутся')
				this.router.navigate(['/'])
			},
			err => {
				this.toastrService.error(err, 'Произошла ошибка при регистрации ')
			},
		)
	}
	back(){
		this.router.navigate(['sign-in'])
	}

	openDialog(event: MouseEvent) {
		event.preventDefault()
		this.dialog.open(AgreementComponent, {width: "1200px", height: "800px"})
	}
}
