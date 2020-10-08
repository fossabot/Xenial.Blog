import "../css/main.scss";
import * as basicLightbox from 'basiclightbox';
import { search } from "./search";
import { comments } from "./comments";
import { xenial } from "@xenial-io/xenial-template";

xenial();

document.querySelectorAll("article .postcontent img").forEach(el => {
    const img = <HTMLImageElement>el;
    img.onclick = () => {
        basicLightbox.create(`<img src="${img.src}" />`).show();
    };
});

search(".tag-overview__search-input", ".tag-overview__list");
search(".archive__search-input", ".archive__list");
search(".series__search-input", ".series__list");
comments();


document.querySelectorAll(".egg").forEach(el => {
    (el as HTMLElement).onclick = async () => {
        window.open("https://unsplash.com/s/photos/austria", "_blank");
    };
});