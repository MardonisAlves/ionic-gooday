import { Component, OnInit } from '@angular/core';
import {  Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { NGXLogger } from 'ngx-logger';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { LoadingController, Platform, ToastController } from '@ionic/angular';


const IMAGE_DIR = 'stored-images';

interface LocalFile {
	name: string;
	path: string;
	data: string;
}

@Component({
  selector: 'app-tirar-foto',
  templateUrl: './tirar-foto.component.html',
  styleUrls: ['./tirar-foto.component.scss'],
})
export class TirarFotoComponent  implements OnInit {

  constructor(
    private logger: NGXLogger, 
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private toastCtrl: ToastController
    ) { }
  img:any = "";
  images: LocalFile[] = [];
  ngOnInit() {
    this.img = "assets/icon/foto.png"
  }

  async loadFiles() {
		this.images = [];

		const loading = await this.loadingCtrl.create({
			message: 'Loading data...'
		});
		await loading.present();

		Filesystem.readdir({
			path: IMAGE_DIR,
			directory: Directory.Data
		})
			.then(
				(result) => {
					this.loadFileData(result.files.map((x) => x.name));
				},
				async (err) => {
					// Folder does not yet exists!
					await Filesystem.mkdir({
						path: IMAGE_DIR,
						directory: Directory.Data
					});
				}
			)
			.then((_) => {
				loading.dismiss();
			});
	}

	async selectImage() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Uri,
			source: CameraSource.Photos // Camera, Photos or Prompt!
		});
	
		if (image) {
			this.saveImage(image)
		}
	}

	// Get the actual base64 data of an image
	// base on the name of the file
	async loadFileData(fileNames: string[]) {
		for (let f of fileNames) {
			const filePath = `${IMAGE_DIR}/${f}`;

			const readFile = await Filesystem.readFile({
				path: filePath,
				directory: Directory.Data
			});

			this.images.push({
				name: f,
				path: filePath,
				data: `data:image/jpeg;base64,${readFile.data}`
			});

		}
	}


  async saveImage(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
        path: `${this.img}/${fileName}`,
        data: base64Data,
        directory: Directory.Data
    });

    // Reload the file list
    // Improve by only loading for the new image and unshifting array!
    this.loadFiles();
}

private async readAsBase64(photo: any) {
  if (this.plt.is('hybrid')) {
      const file = await Filesystem.readFile({
          path: photo.path ?? ""
      });

      return file.data;
  }
  else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
  }
}

// Helper function
convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader;
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});

}
