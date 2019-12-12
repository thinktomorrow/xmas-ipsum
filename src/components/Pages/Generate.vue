<template>
    <div class="hello">
        <h1>Don't know what to write on your Xmas card?</h1>

        <p class="p-8">
            IMAGE REPRESENTING SLIDER MOOD GOES HERE
        </p>

        <p class="p-8">
            SLIDER GOES HERE
        </p>

        <button @click="letsGenerate" class="p-4 bg-red-400 text-white">GENERATE</button>

    </div>
</template>

<script>
    export default {
        props: {
            //
        },
        data(){
            return {}
        },
        methods:{
            letsGenerate(){
                // Generate sentences

                // Show results
                this.$emit('changepage', 'result');
            }
        }
    }
</script>

<style scoped>

</style>
