<template>
  <div class="container">
    <DefaultWrapper>
    <div class="control-icons" v-if="this.dataSource">
        <i class="bi bi-toggles2 column-button" @click="toggleSideboard"></i>
        <DataTableComponent
            :dataSource="dataSource"
            :headers="tableHeaders"
            :key="refreshKey"
        >
        </DataTableComponent>
    </div>
    </DefaultWrapper>
  </div>
</template>

<script>
import DefaultWrapper from '@/components/DefaultWrapper.vue'
import {v4 as uuidv4} from 'uuid'
import DataTableComponent from './DataTableComponent.vue'

export default {
    components: {
        DefaultWrapper,
        DataTableComponent,
        
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
            tableRows: null,
            tabledata: null,
            customerHeaders: null,
            sideBoard: false,
            refreshKey: uuidv4(),
        }
    },
    async mounted(){
        this.tableRows = Object.keys(this.dataSource)
        this.tableData = Object.values(this.dataSource)

        console.log('tableHeaders', this.tableHeaders)
        
    },
    methods: {
        showRowDetails(x){
            //Θα πηγαίνει σε νέα σελίδα που θα δείχνει λεπτομέρειες για το επιλεγμένο στοιχείο
            x
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
    display:flex;

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
</style>