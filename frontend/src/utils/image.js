/**
 * Resizes an image file to the specified maximum width and height, and calls the callback with the resized image file.
 * @param {File} file - The image file to be resized.
 * @param {number} maxWidth - The maximum width of the resized image.
 * @param {number} maxHeight - The maximum height of the resized image.
 * @param {function(File): void} callback - The callback function to be called with the resized image file.
 */
export function resizeImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();

    reader.onload = (readerEvent) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            let width = image.width;
            let height = image.height;

            // Calculate the new dimensions of the image
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);

            canvas.toBlob((blob) => {
                const resizedFile = new File([blob], file.name, {
                    type: file.type,
                    lastModified: Date.now(),
                });
                callback(resizedFile);
            }, file.type);
        };
        image.src = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
};

/**
 * Converts an image file object to a Base64 string.
 * @param {File} imageFile - The image file object to be converted.
 * @returns {Promise<string>} - A promise that resolves to a Base64 string representing the image.
 */
export async function convertImageToBase64(imageFiles) {
    if (Array.isArray(imageFiles)) {
        return Promise.all(imageFiles.map(file => {
            if (typeof file === 'string') {
                return file;
            } else {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(reader.result.split(',')[1]);
                    };
                    reader.onerror = (error) => {
                        reject(error);
                    };
                    reader.readAsDataURL(file);
                });
            }
        }));
    } else {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(imageFiles);
        });
    }
}


/**
 * Decodes a Base64 string into an image URL.
 * @param {string} base64String - The Base64 string representing the image.
 * @returns {string} - The image URL in the format data:image/jpeg;base64.
 */
export function decodeBase64ToImage(base64String) {
    return `data:image/jpeg;base64,${base64String}`;
};