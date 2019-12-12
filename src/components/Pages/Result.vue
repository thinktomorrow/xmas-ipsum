<template>
    <div>
        <h1 class="text-center">Some great lines of joy</h1>

        <div class="w-3/5 mx-auto my-8 rounded bg-gray-100 p-8 border border-gray-200">
            <p id="generated-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div class="flex justify-center">
            <button class="btn bg-red-500 mr-2">copy to clipboard</button>
            <button class="btn bg-red-400">try again</button>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            //
        },
        data(){
            return {}
        }
    }
</script>

<style scoped>

</style>
