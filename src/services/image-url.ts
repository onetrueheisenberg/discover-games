const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const cropAdd = 'crop/600/400/';
    const index = url.indexOf(target) + target.length;
    return `${url.slice(0, index)}${cropAdd}${url.slice(index)}`;
}

export default getCroppedImageUrl;