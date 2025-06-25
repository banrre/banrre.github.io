function downloadPDF() {
    const element = document.querySelector('.container-lg');
    const opt = {
        margin: 0,
        filename: 'Curriculum_Vitae_Sebastian_Correa.pdf',
        image: { type:'jpeg', quality:1},
        html2canvas: { scale:2, useCors:true, scrollY:0},
        jsPDF: { unit:'mm', format:'legal', orientation:'portrait'},
        pagebreak: { mode: ['css', 'legacy']}
    };
    html2pdf().set(opt).from(element).save();
}