<template>
    <div>
        <table style="margin: auto; border:solid; width:100%;">
            <tr style="border: solid 2px black;" >
                <th class="table-header" v-for="(columns, index) in this.headers" :key="index" >{{ columns }}</th>
            </tr>
            <tr class="table-data-row"  v-for="(items, index) in this.dataSource" :key="index" style="solid 1px black;" @click="showRowDetails(items)">
                <td class="table-data" v-for="(columnData, index) in items" :key="index" >{{ columnData }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        dataSource: {
            required: false,
            type: Object,
        },
        headers: {
            required: false,
            type: Array,
        },
    },
    data(){
        return {

        }
    },

    mounted(){
        
    }

}
</script>

<style scoped>
.table-header {
    border:solid 2px black;
    padding: 0.5em;
}
.table-header:hover {
    background-color:lightgray;
    cursor:pointer;
}

.table-data {
    border:solid 1px black; 
    padding: 0.5em;
}
.table-data-row:hover {
    background-color: lightgray;
    cursor:pointer;
}
</style>