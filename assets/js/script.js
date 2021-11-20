let op1 = document.querySelector('p#op1');
let op2 = document.querySelector('p#op2');
let op3 = document.querySelector('p#op3');
let op4 = document.querySelector('p#op4');
let op5 = document.querySelector('p#op5');

let curriculo = document.querySelector('div.secondText');
curriculo.style.display = 'none';

function responde(op) {
    curriculo.style.display = 'block';

    let texto = document.createElement('p');
    

    if(op == 1) {
        texto.innerText = 'OBJETIVO\n\nMe estabelecer em uma empresa e seguir carreira na área de desenvolvimento.\n\n\n';
        op1.style.display = 'none';
    } else if(op == 2) {
        texto.innerText = 'CONHECIMENTOS\n\n- CSS, HTML;\n- Bootstrap, Bulma;\n- C, Dart, Javascript;\n- Metodologias ágeis;\n- SQL, MySQL, MariaDB, SQL Server;\n- Photoshop, Illustrator;\n- UI/UX;\n- GIT e Github;\n\n\n'
        
        op2.style.display = 'none';
    } else if(op == 3) {
        texto.innerText = 'FORMAÇÕES\n\nCurso: Bacharelado em Ciência da Computação - Superior\nInstituição de Ensino: Centro Universitário Senac - Santo Amaro - Santo Amaro\nCursando: 2° semestre\n\nCurso: Informática - nível técnico - Técnico\nInstituição de Ensino: Senac Largo Treze - Largo Treze\nCursando: 3° semestre\n\n\n';
        op3.style.display = 'none';
    } else if(op == 4) {
        texto.innerText = 'CURSOS COMPLEMENTARES\n\nDesenvolvimento utilizando ferramentas de programação na @Digital Innovation One e na @Udemy\n\n\n';
        op4.style.display = 'none';
    }

    

    document.querySelector('div.secondText').appendChild(texto);
}


