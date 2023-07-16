<template>
    <div class="container">
        <TableComponent
            v-if="this.dataSource.length > 0"
            :dataSource="data"
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
            customerHeaders: ['ID', 'Name', 'Surname', 'Phone', 'Cellphone', 'Adress', 'Number', 'IsActive', 'Email'],
            data: [],
        }
    },

    async mounted(){
        await axios.get('/api/customers')
        .then((response) => {
            this.dataSource = response.data
            
            console.log('datasourceee', this.dataSource)
        })

        this.dataSource.map((x) => {
            let tempObject = {}

            tempObject['id'] = x.id
            tempObject['fName'] = x.fName
            tempObject['lName'] = x.lName
            tempObject['phone'] = x.phone
            tempObject['cellphone'] = x.cellphone
            tempObject['address'] = x.address
            tempObject['number'] = x.streetNo
            tempObject['isActive'] = x.isActive
            tempObject['email'] = x.email

            this.data.push(tempObject)
            // this.refreshKey = uuidv4()
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