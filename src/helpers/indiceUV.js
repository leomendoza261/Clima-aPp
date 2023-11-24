function obtenerNivelUV(indiceUV) {
    if (indiceUV >= 0 && indiceUV <= 2) {
      return "Bajo";
    } else if (indiceUV > 2 && indiceUV <= 5) {
      return "Moderado";
    } else if (indiceUV > 5 && indiceUV <= 7) {
      return "Alto";
    } else if (indiceUV > 7 && indiceUV <= 10) {
      return "Muy alto";
    } else if (indiceUV > 10) {
      return "Extremadamente alto";
    } else {
      return "Valor no válido";
    }
  }
export default obtenerNivelUV