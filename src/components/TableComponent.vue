<template>
  <div class="container">
    <DefaultWrapper>
    <div class="control-icons" :key="refreshKey">
        <i class="bi bi-toggles2 column-button" @click="toggleSideboard"></i>
        <table style="margin: auto; border:solid; width:100%;">
            <tr style="border: solid 2px black;" >
                <th class="table-header" v-for="(columns, index) in this.tableHeaders" :key="index" >{{ columns }}</th>
            </tr>
            <tr class="table-data-row"  v-for="(items, index) in this.dataSource" :key="index" style="solid 1px black;" @click="showRowDetails(items)">
                <td class="table-data" v-for="(columnData, index) in items" :key="index" >{{ columnData }}</td>
            </tr>
        </table>
    </div>
    </DefaultWrapper>
    <div class="sideboard" v-if="this.sideBoard">
        <div class="sideboard-elements" v-for="(items, index) in this.hiddenColumns" :key="index" @click="insertColumn(items)">
            {{ items }}
        </div>
    </div>
  </div>
</template>

<script>
import DefaultWrapper from '@/components/DefaultWrapper.vue'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios'

export default {
    components: {
        DefaultWrapper,
        
    },
    props: {
        dataSource: {
            required: false,
            type: Object,
        }
    },
    data(){
        return {
            tableRows: null,
            tabledata: null,
            tableHeaders: null,
            sideBoard: false,
            hiddenColumns: null,
            refreshKey: uuidv4(),
        }
    },
    async mounted(){
        let x = axios.get("/api/testing")
        //Route::get('/test', 'App\Http\Controllers\Controller@test');
        console.log(x)
        this.tableRows = Object.keys(this.dataSource)
        this.tableData = Object.values(this.dataSource)
        console.log('dataSource', this.dataSource)
        console.log('tableRows', this.tableRows)

        //if (klisi === customers){
            this.tableHeaders = ['ID', 'Όνομα', 'Επώνυμο', 'Email', 'Phone', 'Cellphone', 'Adress', 'Number', 'IsActive']
            this.hiddenColumns =  ['Adress', 'Number', 'IsActive']
        //} else { ανάλογα με το τι θα δείχνουμε}
    },
    methods: {
        showRowDetails(x){
            //Θα πηγαίνει σε νέα σελίδα που θα δείχνει λεπτομέρειες για το επιλεγμένο στοιχείο
            console.log(x.customerId)
        },
        toggleSideboard(){
            this.sideBoard = !this.sideBoard
        },
        insertColumn(x){
            this.tableHeaders.push(x)
            this.hiddenColumns.splice(this.hiddenColumns.indexOf(x), 1)
            this.refreshKey = uuidv4()
            console.log(this.tableHeaders)
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