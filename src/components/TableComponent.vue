<template>
  <div>
    <table style="border: solid 1px black; margin: auto;">
        <tr style="border: solid 2px black;" >
            <th v-for="(columns, index) in this.tableHeaders" :key="index" style="border:solid 2px black; padding: 0.5em">{{ columns }}</th>
        </tr>
        <tr v-for="(items, index) in this.tableRows" :key="index" style="solid 1px black;" @click="test(this.customerData[items])">
            <td v-for="(columnData, index) in this.customerData[items]" :key="index" style="border:solid 1px black; padding: 0.5em;">{{ columnData }}</td>
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
            tableRows: [],
            tabledata: [],
            tableHeaders: null,
        }
    },
    mounted(){
        this.tableRows = Object.keys(this.customerData)
        this.tableData = Object.values(this.customerData)
        console.log('customerData', this.customerData)
        console.log('tableRows', this.tableRows)

        //if (klisi === customers){
            this.tableHeaders = ['ID', 'Όνομα', 'Επώνυμο', 'Email', 'Phone', 'Cellphone', 'Adress', 'Number']
        //} else { ανάλογα με το τι θα δείχνουμε}
    },
    methods: {
        test(x){
            console.log(x.customerId)
        }
    }
}
</script>

<style scoped>

</style>