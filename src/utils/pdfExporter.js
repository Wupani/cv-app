import html2pdf from 'html2pdf.js';

export const exportToPDF = (cvData, selectedTemplate) => {
  const element = document.getElementById('cv-preview');
  
  if (!element) {
    console.error('CV preview element not found');
    return Promise.reject(new Error('CV preview element not found'));
  }

  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true);
  
  // Remove the scaling transform for PDF export and optimize for A4
  clonedElement.style.transform = 'none';
  clonedElement.style.marginBottom = '0';
  clonedElement.style.width = '210mm';
  clonedElement.style.height = '297mm';
  clonedElement.style.minHeight = '297mm';
  clonedElement.style.maxHeight = '297mm';
  clonedElement.style.overflow = 'hidden';
  
  // Find the inner content div and adjust its font size for PDF
  const contentDiv = clonedElement.querySelector('div[style*="fontSize"]');
  if (contentDiv) {
    contentDiv.style.fontSize = '11px';
    contentDiv.style.lineHeight = '1.3';
    contentDiv.style.transform = 'none';
    contentDiv.style.padding = '10mm';
    contentDiv.style.overflow = 'hidden';
  }
  
  // Create a temporary container
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.top = '0';
  tempContainer.style.width = '210mm';
  tempContainer.style.height = '297mm';
  tempContainer.style.overflow = 'hidden';
  tempContainer.appendChild(clonedElement);
  document.body.appendChild(tempContainer);

  const options = {
    margin: [5, 5, 5, 5],
    filename: `CV_${cvData.personalInfo.fullName || 'CV'}_${new Date().toLocaleDateString('tr-TR').replace(/\./g, '-')}.pdf`,
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      allowTaint: true,
      letterRendering: true,
      width: 794,
      height: 1123,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 794,
      windowHeight: 1123
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true,
      putOnlyUsedFonts: true
    }
  };

  // Cleanup function
  const cleanup = () => {
    try {
      if (document.body.contains(tempContainer)) {
        document.body.removeChild(tempContainer);
      }
    } catch (cleanupError) {
      console.warn('Cleanup error:', cleanupError);
    }
  };

  // Return the promise from html2pdf
  return html2pdf()
    .set(options)
    .from(clonedElement)
    .save()
    .then(() => {
      cleanup();
      console.log('PDF export completed successfully');
    })
    .catch((error) => {
      cleanup();
      console.error('PDF export failed:', error);
      throw error; // Re-throw the error so it can be caught by the caller
    });
}; 