class DownButton {
	value = $state(false);
	disableOn() {
		this.value = true;
	}
	disableOff() {
		this.value = false;
	}
}

export const disableButton = new DownButton();
