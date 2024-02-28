import { Injectable, inject } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { Haptics } from '@capacitor/haptics';
import { Platform } from '@ionic/angular';
import { ScanResult } from 'src/app/interfaces/ScanResult';

@Injectable({
    providedIn: 'root'
})
export class BarcodeService {
    private platform: Platform = inject(Platform);
    isToastOpen: boolean = false;
    toastMessage!: string;

    isActionSheetOpen = false;
    actionSheetMessage!: string;

    isScanning: boolean = false;
    torchState: boolean = false;

    constructor() {
        if (this.platform.is('android')) BarcodeScanner.prepare();
    }

    // Get the current platform and display error message.
    private handleUnsupportedPlatform(): void {
        const platforms = this.platform.platforms();
        let platformMessage = '';
        platforms.forEach((platform, index) => {
            const space = index == 0 ? '' : ' ';
            platformMessage = platformMessage.concat(space.concat(platform));
        });
        this.setToast(`This feature is not available on '${platformMessage}'.`);
    }

    // Reset states when the scan exits
    private resetStates(): void {
        this.isScanning = false;
        this.torchState = false;
    }

    // Set a toastmessage and display it
    setToast(message: string): void {
        this.toastMessage = message;
        this.isToastOpen = true;
    }

    // Start scanning for barcodes on the Android platform
    async startScan(): Promise<ScanResult | undefined> {
        let scanResult: ScanResult | undefined;
        if (this.platform.is('android')) {
            const permission = await BarcodeScanner.checkPermission({ force: true });
            if (permission.granted) {
                BarcodeScanner.hideBackground();
                document.querySelector('body')?.classList.add('scanner-active');
                this.isScanning = true;
                const result = await BarcodeScanner.startScan({
                    targetedFormats: [
                        SupportedFormat.EAN_13,
                        SupportedFormat.UPC_A
                    ]
                });
                // Barcode found
                if (result.hasContent) {
                    await Haptics.vibrate();
                    document.querySelector('body')?.classList.remove('scanner-active');
                    scanResult = {
                        timestamp: new Date().toString(),
                        protocol: result.format,
                        content: result.content
                    };
                    this.resetStates();
                    BarcodeScanner.prepare();
                }
            }
            // No permissions
            else {
                this.actionSheetMessage = 'Please grant access to your camera before using this feature.';
                this.isActionSheetOpen = true;
            }
        }
        // Unsupported platform
        else this.handleUnsupportedPlatform(); 

        return scanResult;
    };

    // Stop scanning for barcodes on the Android platform
    async stopScan(): Promise<void> {
        if (this.platform.is('android')) {
            await BarcodeScanner.stopScan();
            document.querySelector('body')?.classList.remove('scanner-active');
            this.resetStates();
            BarcodeScanner.prepare();
        }
    }

    // Toggle the flashlight on the Android platform
    async toggleTorch(): Promise<void> {
        if (this.platform.is('android')) {
            await BarcodeScanner.toggleTorch();
            this.torchState = !this.torchState;
        }
    }

    // Open the app settings in Android
    async openAppSettings(): Promise<void> {
        if (this.platform.is('android')) await BarcodeScanner.openAppSettings();
    }

}
