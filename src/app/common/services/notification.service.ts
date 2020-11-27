import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	private getHttpError: Subject<number> = new Subject<number>();
	private getCustOptions: Subject<boolean> = new Subject<boolean>();
    private showContinue: Subject<boolean> = new Subject<boolean>();
    private showLoading: Subject<boolean> = new Subject<boolean>();
    private clearSideOptions: Subject<boolean> = new Subject<boolean>();
    private getHomeOptions: Subject<number> = new Subject<number>();
    private clearRelatedGames: Subject<boolean> = new Subject<boolean>();
	private clickBetContinue: Subject<boolean> = new Subject<boolean>();
    private unreadMailOptions: Subject<number> = new Subject<number>();
    private updateHeader: Subject<boolean> = new Subject<boolean>();

	constructor() { }
	  
	init() {
        this.getHttpError = new Subject<number>();
        this.getCustOptions = new Subject<boolean>();
        this.showContinue = new Subject<boolean>();
        this.showLoading = new Subject<boolean>();
        this.clearSideOptions = new Subject<boolean>();
        this.getHomeOptions = new Subject<number>();
        this.clearRelatedGames = new Subject<boolean>();
		this.clickBetContinue = new Subject<boolean>();
        this.unreadMailOptions = new Subject<number>();
        this.updateHeader = new Subject<boolean>();
	} 

	notifyCustOptions() {
		this.getCustOptions.next(true);
	}

	onCustOptions() {
		return this.getCustOptions.asObservable();
	}

	notifyHttpError(httpError: number) {
		this.getHttpError.next(httpError);
	}  

	onHttpError() {
		return this.getHttpError.asObservable();
	}

	notifyShowNext(show: boolean) {
		this.showContinue.next(show);
	}  

	onShowNext() {
		return this.showContinue.asObservable();
    }
    
    notifyShowLoading(show: boolean) {
		this.showLoading.next(show);
	}  

	onShowLoading() {
		return this.showLoading.asObservable();
    }
    
    notifyClearSideOptions(show: boolean) {
		this.clearSideOptions.next(show);
	}  

	onClearSideOptions() {
		return this.clearSideOptions.asObservable();
    }
    
    notifyHomeOptions(option: number) {
		this.getHomeOptions.next(option);
	}  

	onHomeOptions() {
		return this.getHomeOptions.asObservable();
    }
    
    notifyClearRelatedGames(clear: boolean) {
		this.clearRelatedGames.next(clear);
	}  

	onClearRelatedGames() {
		return this.clearRelatedGames.asObservable();
    }
    
    notifyClickBetContinue() {
		this.clickBetContinue.next();
	}  

	onClickBetContinue() {
		return this.clickBetContinue.asObservable();
	}

	notifyUnreadMail(showUnread: number) {
		this.unreadMailOptions.next(showUnread);
	}  

	onReadMailOptions() {
		return this.unreadMailOptions.asObservable();
    }

    notifyUpdateHeader(reload: boolean) {
		this.updateHeader.next(reload);
	}  

	onUpdateHeader() {
		return this.updateHeader.asObservable();
    }

	clear() {
		this.getHttpError.complete();
		this.getCustOptions.complete();
        this.showContinue.complete();
        this.showLoading.complete();
        this.clearSideOptions.complete();
        this.getCustOptions.complete();
        this.clearRelatedGames.complete();
		this.clickBetContinue.complete();
        this.unreadMailOptions.complete();
        this.updateHeader.complete();
	}
}