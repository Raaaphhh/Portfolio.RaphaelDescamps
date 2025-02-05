document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    const descriptionBox = document.createElement('div');
    const title = document.createElement('h3');
    const sous_titre = document.createElement('h4');
    const description = document.createElement('p');

    sous_titre.style.color = '#D3D3D3'; // Couleur du sous-titre en gris clair

    descriptionBox.style.position = 'fixed';
    descriptionBox.style.right = '210px'; // Déplacer légèrement vers la gauche
    descriptionBox.style.top = '50%';
    descriptionBox.style.transform = 'translateY(-50%)';
    descriptionBox.style.padding = '10px';
    descriptionBox.style.border = '2px solid #000'; // Bordure noire
    descriptionBox.style.boxShadow = '0 0 0 6px #A9A9A9, 0 0 0 7px #000'; // Ombre noire plus épaisse
    descriptionBox.style.backgroundColor = '#A9A9A9';
    descriptionBox.style.display = 'none';
    descriptionBox.style.borderRadius = '5px'; // Border-radius de 5px
    descriptionBox.style.width = '250px'; // Largeur de 200px
    
    descriptionBox.appendChild(title);
    descriptionBox.appendChild(sous_titre);
    descriptionBox.appendChild(description);
    document.body.appendChild(descriptionBox);


    // const firstLink = links[0];
    // if (firstLink || backButton) {
    //     title.textContent = firstLink.getAttribute('data-title');
    //     sous_titre.textContent = firstLink.getAttribute('data-soustitre');
    //     description.textContent = firstLink.getAttribute('data-description');
    //     descriptionBox.style.display = 'block';
    // }

    

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            title.textContent = link.getAttribute('data-title');
            sous_titre.textContent = link.getAttribute('data-soustitre');
            description.textContent = link.getAttribute('data-description');
            descriptionBox.style.display = 'block';
        });

        // link.addEventListener('mouseleave', function() {
        //     descriptionBox.style.display = 'none';      // permet d'enlever la description quand le curseur n'est plus sur le lien
        // });                               
    });

    const backButton = document.querySelector('.btnRetour');

    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            descriptionBox.style.display = 'none';
        });

    }
});
