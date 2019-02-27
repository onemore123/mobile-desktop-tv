document.addEventListener('DOMContentLoaded', function () {
    
    // let itemArray = document.getElementsByClassName('item');
    var modal = document.getElementById('modal');
    var modalBackround = document.getElementById('modal-background');

    document.addEventListener('click', function (event) {
        let click = event.target;
        
        if (!click.matches('.item')) {
            if (!(click.matches('#modal-background') || click.matches('#cross-image'))) {
                console.log('false');
                return false;
            }
        }

        // console.log(event.target.getElementsByClassName('header')[0]);
        // console.log(modalBackround);

        let img = event.target.getElementsByClassName('image')[0];
        let header = event.target.getElementsByClassName('header')[0];
        let desc = event.target.getElementsByClassName('desc')[0];
        let price = event.target.getElementsByClassName('price')[0];
        let crossImage = document.createElement("img");

        crossImage.src = "./img/cross.svg";
        crossImage.classList.add('image');
        crossImage.id = 'cross-image';

        if (modal.style.display != "flex") {
            modal.append(crossImage);
            modal.append(img.cloneNode(true));
            modal.append(header.cloneNode(true));
            modal.append(desc.cloneNode(true));
            modal.append(price.cloneNode(true));
            modal.style.display = "flex";
            modalBackround.style.display = "block";
        } else {
            modal.style.display = "none";
            modalBackround.style.display = "none";
            while (modal.firstChild) {
                modal.removeChild(modal.firstChild);
            }
        }
        console.log('click');
    })
});