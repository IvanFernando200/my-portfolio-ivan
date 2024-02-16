function updateCopyright(){
  const currentYear = new Date().getFullYear(); // 2024
  const copyrightElement = document.querySelector('.footer__copy');
  if(copyrightElement){
    copyrightElement.textContent = `©️ ${currentYear}, Todos los derechos reservados`;
  }
}
export default updateCopyright