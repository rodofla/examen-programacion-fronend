<template>
    <div>
        <h3 class="text-center mb-4">Formulario de Registro</h3>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model.trim="nombre" type="text" class="form-control" placeholder="Nombre" />
                <div v-if="errors.nombre" class="text-danger small">{{ errors.nombre }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Correo</label>
                <input v-model.trim="correo" type="email" class="form-control" placeholder="Correo" />
                <div v-if="errors.correo" class="text-danger small">{{ errors.correo }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" placeholder="Contraseña" />
                <div v-if="errors.password" class="text-danger small">{{ errors.password }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Repetir Contraseña</label>
                <input v-model="password2" type="password" class="form-control" placeholder="Repetir contraseña" />
                <div v-if="errors.password2" class="text-danger small">{{ errors.password2 }}</div>
            </div>
            <div v-if="errors.mismatch" class="text-danger small mb-3">{{ errors.mismatch }}</div>
            <div class="text-center">
                <button type="submit" class="btn btn-success px-5">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { validarEmail } from '@/services/validation.js'
export default {
    setup() {
        const nombre = ref('')
        const correo = ref('')
        const password = ref('')
        const password2 = ref('')
        const errors = reactive({ nombre: '', correo: '', password: '', password2: '', mismatch: '' })

        function onSubmit() {
            errors.nombre = ''
            errors.correo = ''
            errors.password = ''
            errors.password2 = ''
            errors.mismatch = ''

            let valid = true
            if (!nombre.value) {
                errors.nombre = 'El campo nombre es requerido'
                valid = false
            }
            if (!correo.value) {
                errors.correo = 'El campo correo es requerido'
                valid = false
            } else if (!validarEmail(correo.value)) {
                errors.correo = 'Correo inválido'
                valid = false
            }
            if (!password.value) {
                errors.password = 'El campo contraseña es requerido'
                valid = false
            }
            if (!password2.value) {
                errors.password2 = 'El campo repetir contraseña es requerido'
                valid = false
            }
            if (password.value && password2.value && password.value !== password2.value) {
                errors.mismatch = 'Las contraseñas no coinciden'
                valid = false
            }
            if (valid) {
                alert('El registro se ha realizado correctamente')
                nombre.value = ''
                correo.value = ''
                password.value = ''
                password2.value = ''
            }
        }

        return { nombre, correo, password, password2, errors, onSubmit }
    }
}
</script>