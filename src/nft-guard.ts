interface CustomElement {
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
}

type ImageElement = HTMLImageElement | HTMLPictureElement;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isImageElement(e: any): e is ImageElement {
  return (
    typeof e === 'object' &&
    e !== null &&
    Boolean(e.nodeName?.match(/^(img|picture)$/i))
  );
}

class NftGuard extends HTMLElement implements CustomElement {
  private _images: Array<ImageElement>;

  public constructor() {
    super();

    this._images = [];
    this._isUnguarded = this._isUnguarded.bind(this);
    this._preventDownload = this._preventDownload.bind(this);
  }

  public connectedCallback(): void {
    Array.from(this.children)
      .filter(isImageElement)
      .filter(this._isUnguarded)
      .forEach((image) => {
        image.addEventListener('contextmenu', this._preventDownload);
        this._images.push(image);
      });
  }

  public disconnectedCallback(): void {
    this._images.forEach((image) => {
      image.removeEventListener('contextmenu', this._preventDownload);
    });
    this._images.length = 0;
  }

  private _isUnguarded(image: ImageElement): boolean {
    return this._images.indexOf(image) === -1;
  }

  private _preventDownload(event: Event): void {
    event.preventDefault();
    alert('Please stop stealing NFTs! 👮‍♀️');
  }
}

customElements.define('nft-guard', NftGuard);

export type HTMLNftGuardElement = InstanceType<typeof NftGuard>;
