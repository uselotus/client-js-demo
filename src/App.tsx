import { Lotus } from 'lotus-typescript/dist/index.js';
import React from 'react';
import './App.css';

const API_KEY = "lIPgfucY.oQmJET2bWj1rVfC960Iu8FwESKmC3xW5"
const subscription_id = 'subs_91242632-531c-46ab-a411-dee10b5c9bf5'
const date = '2022-11-10T22:57:14.089675Z';
const plan_id = 'plan_f6b484d3-db5c-4095-9c9f-4f93fbfcdbf9';
const customerId = '1d23'


function App() {
    const lotus = new Lotus(API_KEY, {
    host: 'https://api.uselotus.io/', // You can omit this line if using Lotus Cloud
    flushAT: 1,
})
    const trackEvent = () => {
        const data = [
            {
                eventName: 'validator_nodes_count_delta',
                customerId: 'c25d9e77-edf6-4e25-b57c-12475065d8ee',
                timeCreated: '2022-11-24T04:35:47.917Z',
                idempotencyId: 'e41a3b23-8989-4d97-8d03-c213eeda57fe',
                properties: {delta: 1, shard_id: 'vuki-calimero-testnet'}
            }
        ]
        try {
            lotus.trackEvent({batch: data}, (data: any) => {
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getCustomers = async () => {
        console.log("Calling Get customers")
        try {
            await lotus.getCustomers().then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const getCustomerDetails = async () => {
        console.log("Calling Get customer Details")
        try {
            await lotus.getCustomerDetail({customerId: '23432'}).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const createCustomer = async () => {
        console.log("Calling create customer")
        try {
            await lotus.createCustomer({customerId: '1d23', email: "testing@gmail.com"}).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const createCustomersBatch = async () => {
        console.log("Calling create customers Batch")
        const customers = [
            {customerId: '2d23', email: "1testing@gmail.com"},
            {customerId: '3d23', email: "2testing@gmail.com"},
            {customerId: '4d23', email: "4testing@gmail.com"},
            {customerId: '5d23', email: "5testing@gmail.com"},
        ]
        try {
            await lotus.createCustomersBatch({
                customers: customers,
                behaviorOnExisting: "overwrite"
            }).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const getAllPlans = async () => {
        console.log("Calling get ALL Plans")
        try {
            const res = await lotus.getAllPlans()
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const createSubscription = async () => {
        console.log("Calling create subscription")
        const date = '2022-11-10T22:57:14.089675Z';
        const plan_id = 'plan_f6b484d3-db5c-4095-9c9f-4f93fbfcdbf9';
        const customerId = '1d23'
        try {
            await lotus.createSubscription({
                customerId,
                planId: plan_id,
                startDate: date
            }).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const getAllSubscriptions = async () => {
        console.log("Calling get all subscriptions")
        try {
            await lotus.getAllSubscriptions().then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const getSubscriptionDetails = async () => {
        console.log("Calling get subscription Details")
        try {
            await lotus.getSubscriptionDetails({subscriptionId: subscription_id}).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const cancelSubscription = async () => {
        console.log("Calling Cancel subscription")
        const data = {
            subscriptionId: subscription_id,
            planId: plan_id,
            turnOffAutoRenew: true
        }
        try {
            await lotus.cancelSubscription(data).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const getCustomerAccess = async () => {
        console.log("Calling get Customer Access")
        try {
            await lotus.getCustomerAccess({
                customerId: customerId,
                featureName: "feature 1"
            }).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }

    const changeSubscription = async () => {
        console.log("Calling change subscription")
        const data = {
            subscriptionId: subscription_id,
            planId: plan_id,
            replaceImmediatelyType: "change_subscription_plan"
        }
        try {
            await lotus.changeSubscription(data).then(data => console.log(data))
        } catch (error) {
            console.log(error)
        }
        console.log("----------------")
    }


    return (
        <div className="subscribe-container">
            <button onClick={trackEvent} type="button">Track Event</button>
            <button onClick={getCustomers} type="button">Get Customers</button>
            <button onClick={getCustomerDetails} type="button" value="getCustomerDetails">Get Customer Details</button>
            <button onClick={createCustomer} type="button" value="getCustomerDetails">Create Customer</button>
            <button onClick={createCustomersBatch} type="button" value="getCustomerDetails">Create Customers Batch</button>
            <button onClick={getAllPlans} type="button" value="getCustomerDetails">Get All Plans</button>
            <button onClick={createSubscription} type="button" value="getCustomerDetails">Create Subscription</button>
            <button onClick={getAllSubscriptions} type="button" value="getCustomerDetails">Get All Subscriptions</button>
            <button onClick={getSubscriptionDetails} type="button" value="getCustomerDetails">Get Subscription Details</button>
            <button onClick={cancelSubscription} type="button" value="getCustomerDetails">Cancel Subscription</button>
            <button type="button" value="getCustomerDetails">Get Customer Access</button>
            <button type="button" value="getCustomerDetails">Change Subscription</button>
        </div>
    );
}

export default App;
