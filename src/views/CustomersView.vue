<template>
    <div>
        <TableComponent
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
            dataSource: {},
            customerHeaders: ['ID', 'Όνομα', 'Επώνυμο', 'Email', 'Phone', 'Cellphone', 'Adress', 'Number', 'IsActive'],
        }
    },

    async mounted(){
        await axios.get('/api/customers')
        .then((response) => {
            this.dataSource = response
            console.log('datasource', this.dataSource)
        })
    }

}
</script>

<style scoped>

</style>