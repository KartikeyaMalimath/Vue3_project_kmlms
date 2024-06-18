<template>
    <div class="card position-sticky top-1">
        <ul class="nav flex-column bg-white border-radius-lg p-3">
            <li class="nav-item" v-for="item in items" :key="item.id">
                <a class="nav-link text-body d-flex flex-row align-items-center" :href="item.href">
                    <span class="material-icons text-primary opacity-10">{{ item.icon }}</span>
                    <span class="ps-2 text-sm">{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'StickyCard',
    props: {
        items: {
            type: Array,
            required: true,
            validator(value) {
                return value.every(item => 'icon' in item && 'name' in item && 'id' in item && 'href' in item);
            }
        }
    }
}
</script>