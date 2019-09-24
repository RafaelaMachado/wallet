<template functional>
    <img
        class="avatar img-thumbnail rounded-circle"
        :src="`https://ui-avatars.com/api/?size=${props.size || 48}&name=${props.name || 'User Name'}&background=0b903d&color=fff`"
    >
</template>

<style lang="scss">
    .avatar {
        flex-shrink: 0;
    }
</style>
