<template>
  <div>
    <table style="border: solid 1px black; margin: auto;">
        <tr style="border: solid 2px black;" >
            <th v-for="(columns, index) in this.tableColumns" :key="index" style="border:solid 2px black; padding: 0.5em">{{ columns }}</th>
        </tr>
        <tr style="solid 1px black;">
            <td v-for="(columns, index) in this.tableData" :key="index" style="border:solid 1px black; padding: 0.5em;">{{ columns }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        customerData: {
            required: false,
            type: Object,
        }
    },
    data(){
        return {
            tableColumns: [],
            tabledata: [],
        }
    },
    mounted(){
        this.tableColumns = Object.keys(this.customerData)
        this.tableData = Object.values(this.customerData)
        console.log(this.customerData)
    }
}
</script>

<style scoped>

</style>