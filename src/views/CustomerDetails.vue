<template>
    <div class="container">
        <div class="user-info">
            <form class="form" v-if="this.data">
                <label for="fName">First Name</label>
                <input readonly :value="this.data.fName" type="text" id="fName" name="fName">
                
                <label for="lName">Last Name</label>
                <input readonly :value="this.data.lName" type="text" id="lName" name="lName">

                <label for="phone">Phone</label>
                <input readonly :value="this.data.phone" type="text" id="phone" name="phone">

                <label for="cellphone">Cellphone</label>
                <input readonly :value="this.data.cellphone" type="text" id="cellphone" name="cellphone">

                <label for="address">Address</label>
                <input readonly :value="this.data.address" type="text" id="address" name="address">

                <label for="streetNo">Street No</label>
                <input readonly :value="this.data.streetNo" type="text" id="streetNo" name="streetNo">

                <label for="email">Email</label>
                <input readonly :value="this.data.email" type="text" id="email" name="email">

                <label for="isActive">Is Active</label>
                <input readonly :value="this.data.isActive" type="text" id="isActive" name="isActive">

                <label for="created_at">Created At</label>
                <input readonly :value="this.data.created_at" type="text" id="created_at" name="created_at">

                <label for="updated_at">Updated At</label>
                <input readonly :value="this.data.updated_at" type="text" id="updated_at" name="updated_at">
            </form>
        </div>
        <div class="user-orders">
            <TableComponent
                v-if="this.user_orders"
                :tableHeaders="['Items', 'Address', 'Price', 'State']"
                :dataSource="order_data"
            >
            </TableComponent>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import TableComponent from '../components/TableComponent.vue'
export default {
    components: {
        TableComponent,
    },
    props: [
        'id',
    ],
    data(){
        return {
            data: null,
            user_orders: null,
            order_data: [],
            photos: [],
        }
    },
    async mounted(){
        console.log("id", this.id)
        await axios.get('/api/selectedCustomer/'+this.id )
        .then((response) => {
            this.data = response.data
            this.user_orders = this.data.user_orders
            console.log('this.data', this.data)
        })

        this.user_orders.map((x) => {
            let tempObject = {}

            tempObject['items'] = JSON.parse(x.items)
            tempObject['address'] = x.delivery_address
            tempObject['total_price'] = x.total_price
            tempObject['state'] = x.state

            this.order_data.push(tempObject)
        })
    }

}
</script>

<style scoped>
.container {
    display:flex;
}

.form > label {
    width: 10vw;
    height: 30px;
    display: block;
    margin: 0.5em auto;

}
.form > input {
    width:33vw;
    /* display:block; */
    text-align: center;
}

.user-orders {
    margin: 1em;
}
</style>