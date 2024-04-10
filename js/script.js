 function abrirPDF() {
        var url = 'docs/Curriculum Vitae.pdf';
        var win = window.open(url, '_blank');
            if (win) {
             win.focus();
            } else {
                alert('Por favor, habilita las ventanas emergentes en tu navegador.');
            }
}