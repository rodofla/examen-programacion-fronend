<template>
    <li class="nav-item">
        <a href="#" class="nav-link" :class="{ active: isActive }" @click.prevent="activate">
            {{ label }}
        </a>
    </li>
</template>
<script>
export default {
    props: { id: String, label: String, activeTab: String },
    computed: {
        isActive() {
            return this.$parent.activeTab === this.id
        }
    },
    methods: {
        activate() {
            this.$parent.activeTab = this.id
        }
    }
}
</script>