<template>
    <div class="container">
        <div class="user-info">
            <form v-if="this.data">
                <div class="row">
                    <div class="col">
                        <label class="labels" for="fName">First Name</label>
                        <input class="form-control inputs" readonly type="text" placeholder="First name" id="fName" :value="this.data.name">

                        <label class="labels" for="cellphone">Cellphone</label>
                        <input class="form-control inputs" readonly :value="this.data.cellphone" type="text" id="cellphone" name="cellphone">

                        <label class="labels" for="address">Address</label>
                        <input class="form-control inputs" readonly :value="this.data.address" type="text" id="address" name="address">

                        <label class="labels" for="email">Email</label>
                        <input class="form-control inputs" readonly :value="this.data.email" type="text" id="email" name="email">

                        <label class="labels" for="created_at">Created At</label>
                        <input class="form-control inputs" readonly :value="this.data.created_at" type="text" id="created_at" name="created_at">
                    </div>
                    <div class="col">
                        <label class="labels" for="fName">Last Name</label>
                        <input type="text" class="form-control inputs" readonly placeholder="Last name" :value="this.data.lName">

                        <label class="labels" for="phone">Phone</label>
                        <input class="form-control inputs" readonly :value="this.data.phone" type="text" id="phone" name="phone">

                        <label class="labels" for="streetNo">Street No</label>
                        <input class="form-control inputs" readonly :value="this.data.streetNo" type="text" id="streetNo" name="streetNo">

                        <label class="labels" for="isActive">Is Active</label>
                        <input class="form-control inputs" readonly :value="this.data.isActive" type="text" id="isActive" name="isActive">

                        <label class="labels" for="updated_at">Updated At</label>
                        <input class="form-control inputs" readonly :value="this.data.updated_at" type="text" id="updated_at" name="updated_at">
                    </div>
                </div>
            </form>
        </div>
        
        <div class="user-orders">
            <h1 v-if="this.user_orders">My Orders</h1>
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
        await axios.get('/api/selectedCustomer/')
        .then((response) => {
            this.data = response.data
            this.user_orders = this.data.user_orders
        })
        .catch(() => {
            this.$router.push('/')
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
    /* display:flex; */
}
.labels {
    margin:0.5em;
    font-weight: bold;
}

.inputs {
    border:solid 1px;
    text-align: center;
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
    margin: 2em;
}
</style>