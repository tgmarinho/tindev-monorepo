// isso server para importar imagens em outros componentes
declare module '*.png' {
  const images: any;
  export default images;
}