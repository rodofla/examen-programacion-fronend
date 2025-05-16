<template>
    <div>
        <h3 class="text-center mb-4">Cálculo de calificaciones</h3>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label class="form-label">Nota 1</label>
                <input v-model.number="nota1" type="number" class="form-control" placeholder="Nota 1" min="10" max="70"
                    required />
            </div>
            <div class="mb-3">
                <label class="form-label">Nota 2</label>
                <input v-model.number="nota2" type="number" class="form-control" placeholder="Nota 2" min="10" max="70"
                    required />
            </div>
            <div class="mb-3">
                <label class="form-label">Nota 3</label>
                <input v-model.number="nota3" type="number" class="form-control" placeholder="Nota 3" min="10" max="70"
                    required />
            </div>
            <div class="mb-3">
                <label class="form-label">Asistencia %</label>
                <input v-model.number="asistencia" type="number" class="form-control" placeholder="Asistencia" min="0"
                    max="100" required />
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary px-5">Calcular</button>
            </div>
        </form>
        <div v-if="resultado" class="mt-4 text-center">
            <p>Promedio: <strong>{{ promedio.toFixed(2) }}</strong></p>
            <p><strong>{{ mensaje }}</strong></p>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { validarNotas, validarAsistencia } from '@/services/validation.js'
export default {
    setup() {
        const nota1 = ref(null), nota2 = ref(null), nota3 = ref(null), asistencia = ref(null)
        const resultado = ref(false), promedio = ref(0), mensaje = ref('')
        function onSubmit() {
            if (!validarNotas([nota1.value, nota2.value, nota3.value]) || !validarAsistencia(asistencia.value)) {
                return alert('Valores fuera de rango')
            }
            promedio.value = nota1.value * 0.35 + nota2.value * 0.35 + nota3.value * 0.3
            mensaje.value = promedio.value >= 40 && asistencia.value >= 80 ? 'Aprobado' : 'Reprobado'
            resultado.value = true
        }
        return { nota1, nota2, nota3, asistencia, onSubmit, resultado, promedio, mensaje }
    }
}
</script>