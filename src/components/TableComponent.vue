<template>
  <div class="container">
    <!-- <DefaultWrapper> -->
    <div class="control-icons" v-if="this.dataSource" :key="refreshKey">
        <!-- <i class="bi bi-toggles2 column-button" @click="toggleSideboard"></i> -->
        <table class="table">
            <tr style="border: solid 2px black;" >
                <th class="table-header" v-for="(columns, index) in this.tableHeaders" :key="index" >{{ columns }}</th>
            </tr>
            <tr class="table-data-row"  v-for="(items, index) in this.dataSource" :key="index" style="solid 1px black;" @click="showRowDetails(items)">
                <td class="table-data" v-for="(columnData, index) in items" :key="index" >{{ columnData }}</td>
            </tr>
        </table>
    </div>
    <!-- </DefaultWrapper> -->
  </div>
</template>

<script>
// import DefaultWrapper from '@/components/DefaultWrapper.vue'
import {v4 as uuidv4} from 'uuid'

export default {
    components: {
        // DefaultWrapper,
        
    },
    props: {
        dataSource: {
            required: false,
            type: Array,
        },
        tableHeaders: {
            required: true,
            type: Array
        }
    },
    data(){
        return {
            customerHeaders: null,
            refreshKey: uuidv4(),
            data: [],

        }
    },
    async mounted(){
        

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
            this.refreshKey = uuidv4()
        })
        
    },
    methods: {
        showRowDetails(data){
            //Θα πηγαίνει σε νέα σελίδα που θα δείχνει λεπτομέρειες για το επιλεγμένο στοιχείο
            this.$router.push({name: 'customer_details', params: {id: data.id}})
        },
        toggleSideboard(){
            this.sideBoard = !this.sideBoard
        },
        insertColumn(x){
            this.customerHeaders.push(x)
            this.hiddenCustomerColumns.splice(this.hiddenCustomerColumns.indexOf(x), 1)
            this.refreshKey = uuidv4()
            
        }
    }
}
</script>

<style scoped>
.container {
    margin: auto;
    /* overflow-x: auto; */
}
.table {
    margin: auto;
    border:solid;
    max-width:100%;
    overflow: hidden;
}

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

.control-icons {
    
}
.column-button{
    width:100%;
    display:flex;
    justify-content: end;
    font-size:1.5em;
    margin-bottom:0.5em; 
    cursor:pointer;
}

.sideboard {
    position:absolute;
    right:3em;
    border:solid;
    width:10em;
    padding:1em;
}

.sideboard-elements {
    border:solid 1px;
    margin:1em;
    cursor:pointer;
}

@media (max-width: 1000px){
    .table {
        font-size: 10px;
    }

    .container {
        overflow-x: auto;
        width:100vw;
        margin:0.3em;
    }
}

</style>