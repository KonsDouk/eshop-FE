<template>
    <div class="container">
        <TableComponent
            v-if="this.dataSource.length > 0"
            :dataSource="dataSource"
            :tableHeaders="customerHeaders"
        >
        </TableComponent>
    </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue'
import axios from 'axios'
export default {
    components: {
        TableComponent,

    },
    data(){
        return {
            dataSource: [],
            customerHeaders: ['ID', 'Όνομα', 'Επώνυμο', 'Phone', 'Cellphone', 'Adress', 'Number', 'IsActive', 'Email'],
        }
    },

    async mounted(){
        await axios.get('/api/customers')
        .then((response) => {
            this.dataSource = response.data
            // console.log('datasource', this.dataSource)
        })
    }

}
</script>

<style scoped>
.container {
    margin: auto;
    /* border:solid 1px blue; */
}
</style>