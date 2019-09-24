<template>
    <div class="container-fluid h-100 p-0 d-flex">
        <div class="w-25 sidebar">
            <div class="current-user bg-light d-flex align-items-center flex-nowrap p-2">
                <user-avatar :name="currentUser.username"/>
                <div class="ml-2 text-truncate">{{currentUser.username}}</div>
                <button class="btn btn-sm btn-green ml-auto"><i class="material-icons">exit_to_app</i></button>
            </div>
            <div class="coins-list bg-light p-2">
            </div>
        </div>

        <div class="d-flex flex-column w-75">
            <div class="wallet-header bg-light p-2 d-flex align-items-center">
            </div>
            <div class="wallet-infos flex-grow-1 p-2" ref="walletInfos">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Wallet',
    data () {
        return {
            currentUser: {
                id: 1,
                username: 'Rafaéla Machado'
            }
        }
    }
}
</script>

<style lang="scss">
$border-color: #c2c6ca;

.current-user {
    height: 75px;
    font-size: 1.25rem;
    border-bottom: 1px solid $border-color;
}
.fade-enter-active {
    animation: fade-in 300ms ease-out forwards;
}
.fade-leave-active {
    animation: fade-out 300ms ease-out forwards;
}
.sidebar {
    border-right: 1px solid $border-color;
}
.wallet-header {
    height: 75px;
    font-size: 1.25rem;
    border-bottom: 1px solid $border-color;
}
.wallet-infos {
    height: calc(100% - 125px);
    overflow-y: auto;
}
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
