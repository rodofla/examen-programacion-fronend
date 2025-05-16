export function validarNotas(notas) {
    return notas.every(n => n >= 10 && n <= 70)
}
export function validarAsistencia(a) {
    return a >= 0 && a <= 100
}
export function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}